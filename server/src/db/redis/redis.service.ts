import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';
import type { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  private readonly client: RedisClientType;
  private readonly $wait: Promise<void>;

  constructor() {
    this.client = createClient();

    this.$wait = new Promise((resolve) => {
      this.client.connect().then(() => {
        resolve();
      });

      this.client.on('error', (err) => console.log('Redis Client Error', err));
    });
  }

  async set(key: string, value: any, expiration?: number) {
    await this.$wait;

    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    await this.client.set(key, value);

    if (expiration) {
      await this.client.expire(key, expiration);
    }
  }

  async get(key: string) {
    await this.$wait;
    const val = await this.client.get(key);

    try {
      return JSON.parse(val);
    } catch {
      return val;
    }
  }

  async delete(key: string) {
    await this.$wait;
    return this.client.del(key);
  }

  async getClient() {
    await this.$wait;
    return this.client;
  }
}
