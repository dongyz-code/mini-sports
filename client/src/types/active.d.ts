export interface Active {
  id: number;
  /** 封面 */
  avator: string;
  /** 标题 */
  title: string;
  /** 组织者类型 */
  organizerType: number;
  /** 场地号 */
  venueNumber: string;
  /** 开始时间 */
  startTime: Date;
  /** 结束时间 */
  endTime: Date;
  /** 日期 */
  date: Date;
  /** 取消报名时间 */
  cancelDeadline: number;
  /** 简介 */
  desc: string;
  /** 图片 */
  picture: string;
  /** 报名人数 */
  applyNumbers: number;
  /** 报名费用 */
  applyFare: number;
  /** 标题 */
  chargeType: number;
  /** 女士优惠 */
  ladyDiscount: boolean;
  /** 等级女士 */
  ladyLevel: number | null;
  /** 等级男士 */
  manLevel: number | null;
  /** 电话 */
  phone: string;
  /** 微信 */
  weixin: string;
  /** 允许带人 */
  withPeople: boolean;
  /** 自动取消 */
  autoCancle: boolean;
  /** 前几个小时自动取消 */
  dateLimit: number | null;
  /** 人数不足多少人取消活动 */
  numbersLimit: number | null;
  createTime: Date;
  updateTime: Date;
  /** 组织者id */
  organizerId: number | null;
}

export type CreateActive = Omit<Active, 'id'>;
