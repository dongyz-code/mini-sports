import { FC, useEffect, useMemo, useState } from 'react';
import { ArrowSize8 } from '@nutui/icons-react-taro';
import { Cell, Picker } from '@nutui/nutui-react-taro';
import { defaultFiledNames } from '@/constant/common';
import type { FiledNames } from '@/types';
import { PickerOption } from '@nutui/nutui-react-taro/dist/types/packages/picker';

interface SelectFrops {
  value?: any;
  onChange?: (v: any) => void;
  options: { text: string; value: any }[] & any[];
  fieldNames?: Partial<FiledNames>;
  placeholder?: string;
  mode?: 'multiple';
}

const VSelect: FC<SelectFrops> = ({ options, value, onChange, placeholder, fieldNames, mode }) => {
  const [visible, setVisible] = useState(false);
  const _fieldNames = { ...defaultFiledNames, ...fieldNames };
  const _values = Array.isArray(value) ? value : [value];

  const confirmPicker = (_o: PickerOption[], values: (string | number)[]) => {
    if (mode === 'multiple') {
      onChange?.(values);
    } else {
      onChange?.(values[0]);
    }
    setVisible(false);
  };

  const title = useMemo(() => {
    if (mode === 'multiple') {
      if (value?.length) {
        return '';
      } else {
        return `已选择${value.length || 0}项`;
      }
    } else {
      return options?.find((item) => item[_fieldNames.value] === value)?.text;
    }
  }, [value, options, fieldNames]);

  return (
    <>
      <Cell
        style={{
          padding: 0,
        }}
        title={title || placeholder || ''}
        extra={<ArrowSize8 size={16} />}
        align="center"
        onClick={() => setVisible(!visible)}
      />
      <Picker
        visible={visible}
        options={options}
        value={_values}
        onConfirm={confirmPicker}
        onClose={() => setVisible(false)}
      ></Picker>
    </>
  );
};

export default VSelect;
