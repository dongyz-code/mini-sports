import React, { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';
import Calendar from '../Calendar';
import FloatModal from '../FloatModal';
import css from './index.module.scss';

interface ChooseDateProps {
  label?: string;
  required?: boolean;
  value?: number[];
  onChange?: (val: number[]) => void;
  placeholder?: string;
}

const ChooseDate: React.FC<ChooseDateProps> = ({ label, required, value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [dateList, setDateList] = useState<number[]>([]);

  const onOk = () => {
    console.log('dateList', dateList);
    onChange?.(dateList);
    setOpen(false);
  };

  useEffect(() => {
    setDateList(value || []);
  }, [value]);

  return (
    <>
      <View onClick={() => setOpen(true)} className={classNames(css['choose-date-wrap'])}>
        <View
          className={classNames(css['choose-label'], {
            [css['required']]: required,
          })}
        >
          <Text>{label}</Text>
          <Text className={css['date-placeholder']}>{value?.length ? `已选择${value.length}天` : placeholder}</Text>
        </View>

        <View className={css['right-tip']}></View>
      </View>

      <FloatModal open={open} onClose={() => setOpen(false)} onOk={onOk} title="选择日期">
        <Calendar value={dateList} onChange={(v) => setDateList(v || [])}></Calendar>
      </FloatModal>
    </>
  );
};

export default ChooseDate;
