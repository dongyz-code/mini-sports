import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import dayjs, { type Dayjs } from 'dayjs';
import classNames from 'classnames';
import { getHeaderContent, getFirstDayOfCurrMonth, getDateList, isSameMonth } from './utils';
import css from './index.module.scss';

interface CalendarProps {
  weekLabelIndex?: number;
  value?: number[];
  onChange?: (value?: number[]) => void;
}

const formatStr = 'YYYYMMDD';

const Calendar: React.FC<CalendarProps> = ({ value = [], onChange, weekLabelIndex = 0 }) => {
  const [startDateOfMonth, setStartDateOfMonth] = useState(dayjs().startOf('month'));
  const [dateList, setDateList] = useState(() => getDateList(startDateOfMonth));

  const changeMonth = (offset: -1 | 1) => {
    setStartDateOfMonth(startDateOfMonth.add(offset, 'month'));
  };

  const onSelectDate = (date: Dayjs) => {
    if (!isSameMonth(date, startDateOfMonth)) {
      return;
    }

    const timestamp = date.valueOf();
    let newVal: number[] = [];
    if (value?.includes(timestamp)) {
      newVal = value.filter((v) => v !== timestamp);
    } else {
      newVal = [...value, timestamp];
    }
    onChange?.(newVal);
  };

  useEffect(() => {
    const calendarFirstDate = getFirstDayOfCurrMonth(startDateOfMonth, weekLabelIndex);
    const _dateList = getDateList(calendarFirstDate);
    setDateList(_dateList);
  }, [startDateOfMonth, weekLabelIndex]);

  return (
    <View className={css['calendar']}>
      <View className={css['calendar-header']}>
        <View className={css['calendar-arrow-bth']} onClick={() => changeMonth(-1)}>
          {/* <AtIcon value="chevron-left" size={16} /> */}
        </View>
        <View className={css['calendar-title']}>{getHeaderContent(startDateOfMonth)}</View>
        <View className={css['calendar-arrow-bth']} onClick={() => changeMonth(1)}>
          {/* <AtIcon value="chevron-right" size={16} /> */}
        </View>
      </View>

      <View className={css['calendar-body']}>
        <View className={css['calendar-body-date-list']}>
          {dateList.map(({ date, dateLabel, dayLabel }) => (
            <View key={dateLabel} className={css['calendar-body-date-item']}>
              <View
                onClick={() => onSelectDate(date)}
                className={classNames(css['calendar-body-date-item-content'], {
                  [css['selected']]: value.includes(date.valueOf()),
                  [css['other-month']]: !isSameMonth(date, startDateOfMonth),
                })}
              >
                <View className={css['calendar-body-date-item-date']}>{dateLabel}</View>
                <View className={css['calendar-body-date-item-day']}>{dayLabel}</View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Calendar;
