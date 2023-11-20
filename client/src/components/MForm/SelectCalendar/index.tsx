import { Calendar, Cell, type CalendarProps } from '@nutui/nutui-react-taro';
import { FC, useState } from 'react';
import { RectRight } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components';
import css from './index.module.scss';

interface SelectCalendarProps extends Partial<CalendarProps> {
  value?: string | string[];
  onChange?: (v: string | string[]) => void;
}

const SelectCalendar: FC<SelectCalendarProps> = ({ value, onChange, type, title = '选择日期', ...rst }) => {
  const [visible, setVisible] = useState(false);

  const getDesc = () => {
    if (!value || (Array.isArray(value) && !value.length)) {
      return '请选择';
    }

    if (type === 'single') {
      return value;
    }

    if (type === 'multiple') {
      return `已选择 ${value.length}`;
    }

    if (type === 'range') {
      return `${value[0]}-${value[1]}`;
    }

    if (type === 'week') {
      return `${value[0]}-${value[1]}`;
    }
  };

  const onConfirm: CalendarProps['onConfirm'] = (date) => {
    let _date = date as unknown as string[];
    if (type === 'single') {
      return onChange?.(_date[3]);
    }

    return onChange?.((_date as unknown as string[][]).map((d) => d[3]));
  };

  return (
    <View className="overlay-popup-wrap">
      <View className={css['select-cell']} onClick={() => setVisible(true)}>
        <View className={css['select-cell-value']}>{getDesc()}</View>

        <RectRight className={css['select-cell-icon']} size={16} />
      </View>

      <Calendar
        type={type}
        title={title}
        className={css['select-calendar']}
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={onConfirm}
        {...rst}
      ></Calendar>
    </View>
  );
};

export default SelectCalendar;
