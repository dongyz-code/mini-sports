import { WexinLocation } from './address';

export interface Active {
  id: number;
  /** 封面 */
  avatar: string;
  /** 标题 */
  title: string;
  /** 组织者类型 */
  organizer_type?: 'people' | 'club';
  /** 地址信息 */
  Address: WexinLocation;
  /** 场地号 */
  venue_number: string;
  /** 开始时间 */
  active_start_time: string;
  /** 结束时间 */
  active_end_time: string;
  /** 日期 */
  active_date: string[];
  /** 取消报名时间 */
  registration_deadline: number;
  /** 简介 */
  desc?: string;
  /** 图片 */
  pictures?: string[];
  /** 报名人数 */
  registration_count: number;
  /** 报名费用 */
  registration_fee: number;
  /** 收费类型 */
  charge_type: string;
  /** 女士优惠 */
  lady_discount: boolean;
  /** 等级女士 */
  lady_level?: number | null;
  /** 等级男士 */
  man_level?: number | null;
  /** 姓名 */
  username: string;
  /** 电话 */
  phone: string;
  /** 微信 */
  weixin: string;
  /** 允许带人 */
  allow_guests: boolean;
  /** 最多允许携带的人数 */
  max_guests: number;
  /** 自动取消 */
  auto_cancel: boolean;
  /** 前几个小时自动取消 */
  date_limit: number | null;
  /** 人数不足多少人取消活动 */
  numbers_limit: number | null;
  create_time: Date;
  update_time: Date;
  /** 组织者id */
  user_id: number | null;
}

export type AddActiveParam = Omit<
  Active,
  'id' | 'user_id' | 'createTime' | 'updateTime' | 'create_time' | 'update_time' | 'user_id'
>;
