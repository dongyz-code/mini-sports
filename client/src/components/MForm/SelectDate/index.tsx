import { FC, useState } from 'react';
import { Cell, DatePicker, type DatePickerProps } from '@nutui/nutui-react-taro';
import { PickerOption } from '@nutui/nutui-react-taro/dist/types/packages/picker';
import { RectRight } from '@nutui/icons-react-taro';
import classNames from 'classnames';
import css from './index.module.scss';

interface SelectDateFrops extends Partial<Omit<DatePickerProps, 'value'>> {
  value?: any[];
  onChange?: (v: any[]) => void;
  title?: string;
}

const SelectDate: FC<SelectDateFrops> = ({ value, onChange, title = '选择时间', ...rst }) => {
  const [visible, setVisible] = useState(false);
  const onConfirm = (_options: PickerOption[], values: (string | number)[]) => {
    onChange?.(values);
  };
  return (
    <>
      <Cell
        title={value?.join(':') || '请选择'}
        onClick={() => setVisible(true)}
        style={{ padding: 0 }}
        className={classNames({ [css['select-placeholder']]: !value })}
        extra={<RectRight size={16} />}
      ></Cell>
      <DatePicker
        {...rst}
        visible={visible}
        title={title}
        onClose={() => setVisible(false)}
        onConfirm={onConfirm}
      ></DatePicker>
    </>
  );
};

export default SelectDate;
