export const organizer_types = [
  { text: '个人', value: 1 },
  { text: '俱乐部', value: 2 },
];

export const cancelDeadlines = [
  { text: '0小时', value: 0 },
  { text: '1小时', value: 1 },
  { text: '2小时', value: 2 },
  { text: '3小时', value: 3 },
  { text: '4小时', value: 4 },
  { text: '5小时', value: 5 },
  { text: '6小时', value: 6 },
  { text: '7小时', value: 7 },
  { text: '7小时', value: 7 },
  { text: '8小时', value: 8 },
  { text: '9小时', value: 9 },
  { text: '10小时', value: 10 },
  { text: '11小时', value: 11 },
  { text: '12小时', value: 12 },
  { text: '24小时', value: 24 },
  { text: '48小时', value: 48 },
  { text: '72小时', value: 72 },
  { text: '一周(7天)', value: 24 * 7 },
  { text: '两周(14天)', value: 24 * 14 },
  { text: '一个月(30天)', value: 24 * 30 },
  { text: '两个月(60天)', value: 24 * 60 },
];

export const chargeTypes = [
  { text: '线下收费', value: 'offline' },
  { text: '二维码收款', value: 'qrcode' },
];

export const getOptionLabel = (value: any, options: { text: string; value: any }[]) => {
  if (typeof value === 'undefined') return;
  return options.find(({ value: val }) => val === value)?.text;
};

export const takeLimit = [
  { text: '无限', value: -1 },
  ...Array(15)
    .fill(0)
    .map((_, i) => ({ text: String(i + 1), value: i + 1 })),
];
