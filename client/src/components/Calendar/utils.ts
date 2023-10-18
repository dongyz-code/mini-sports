import dayjs, { type Dayjs } from 'dayjs';

interface CalendarDateItem {
  date: Dayjs;
  dayLabel: string;
  dateLabel: string;
}

type MyDate = Date | Dayjs;

const dayMap = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

export const getHeaderContent = (date: MyDate) => {
  return dayjs(date).format('YYYY - MM');
};

/**
 * 获取当前月日历的第一天
 * @param firstDate
 * @param weekLabelIndex
 * @returns
 */
export const getFirstDayOfCurrMonth = (firstDate: MyDate, weekLabelIndex: number = 0) => {
  let date = dayjs(firstDate).startOf('month');

  const offset = -date.get('day') + weekLabelIndex;

  date = date.add(offset, 'day');

  if (date.isAfter(dayjs(firstDate).startOf('month'))) {
    date = date.add(-7, 'day');
  }

  return date;
};

/**
 * 以一个起始日期，获取42天日期列表
 * @param date
 * @returns Date[]
 */
export const getDateList = (date: MyDate) => {
  const dateArr: CalendarDateItem[] = [];
  for (let i = 0; i < 42; i++) {
    let _date = dayjs(date);
    _date = _date.add(i, 'day');

    const dayIndex = _date.get('day');
    const dayLabel = dayMap[dayIndex];
    const dateLabel = _date.format('MM-DD');

    dateArr.push({
      date: _date.startOf('date'),
      dayLabel,
      dateLabel,
    });
  }

  return dateArr;
};

export const isSameMonth = (date1: MyDate, date2: MyDate) => {
  return dayjs(date1).startOf('month').isSame(dayjs(date2).startOf('month'));
};
