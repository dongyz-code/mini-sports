import * as path from 'path';
import * as fse from 'fs-extra';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import client from '../utils/httpClient';
import { LocationRes, LocationResult } from 'src/types/location';
import { STATIC_DIR } from 'src/config/config';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { ChinaLocation } from '@prisma/client';

@Injectable()
export class LocationJob {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly logger: Logger,
  ) {
    this.job();
  }

  @Cron('0 0 1 * * *')
  async job() {
    this.logger.log('location job start');

    const isExists = await this.isLocationExists();

    if (isExists) {
      this.logger.log('location job already exists');
      return;
    }

    const locationList = await this.getLocations(this.config.get('locationKey')!);

    const list = this.flatLocation(locationList);

    await this.prisma.chinaLocation.createMany({
      data: list,
    });

    this.logger.log('location job done');
  }

  async getLocations(key: string): Promise<LocationResult[][]> {
    // const { data } = await client.get<LocationRes>('/ws/district/v1/list', {
    //   params: {
    //     key,
    //   },
    // });

    // if (data.status === 0) {
    //   fse.writeJSON('./location.json', data.result || []);
    //   return data;
    // } else {
    //   console.error('error', data);
    // }
    // VzgJwtTLDiHA75Xopd838wrLKOPCK6CE

    const locationFile = path.resolve(STATIC_DIR, 'location.json');
    return fse.readJSON(locationFile);
  }

  private flatLocation(result: LocationResult[][]) {
    const locationList: ChinaLocation[] = [];

    const min = (item: LocationResult, replace?: number[]) => {
      const { fullname, id, location } = item;
      const { lat, lng } = location;
      let pid: string | null = null;
      if (replace?.length) {
        const arr = id.split('');
        arr.splice(replace[0], replace.length, ...replace.map(() => '0'));
        pid = arr.join('');
      }

      locationList.push({
        code: id,
        pid: pid,
        name: fullname,
        latitude: lat,
        longitude: lng,
      });
    };

    for (let i = 0; i < result.length; i++) {
      const items = result[i];
      const replace = i !== 0 ? [i * 2, i * 2 + 1] : undefined;
      for (let j = 0; j < items.length; j++) {
        const item = items[j];
        min(item, replace);
      }
    }

    return locationList;
  }

  private async isLocationExists(): Promise<boolean> {
    const location = await this.prisma.chinaLocation.findFirst({});
    return location !== null;
  }
}

// getLocations('NPYBZ-3VBCW-M4ZRA-YKMAI-OE6E2-NHFQB');
