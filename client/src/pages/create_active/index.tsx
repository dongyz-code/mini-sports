import { useSetState } from 'ahooks';
import { View, Picker } from '@tarojs/components';
import { AtForm, AtInput, AtList, AtListItem } from 'taro-ui';
import ImageUpload from '@/components/ImageUpload';
import MapChoosePoint from '@/components/MapChoosePoint';
import { Active } from '@/types';
import { organizerTypes } from '@/constant';
import css from './index.module.scss';

const CreateActive = () => {
  const [form, setForm] = useSetState<Partial<Active>>({});

  return (
    <View>
      <AtForm className={css['create-active']} onSubmit={() => {}}>
        <View className={css['avator-container']}>
          <ImageUpload value={form.avator} onChange={(avator) => setForm({ avator })} />
        </View>

        <AtInput
          name="title"
          title="标题"
          required
          value={form.title}
          onChange={(title: string) => setForm({ title })}
          placeholder="请输入标题"
        />

        <Picker
          mode="selector"
          range={organizerTypes}
          rangeKey="label"
          onChange={(e) => {
            const i = +e.detail.value;
            const val = organizerTypes[i].value;
            setForm({ organizerType: val });
          }}
        >
          <AtList>
            <AtListItem
              className={css['required']}
              title="组织者类型"
              extraText={organizerTypes.find(({ value }) => value === form.organizerType)?.label}
            />
          </AtList>
        </Picker>

        <AtInput
          type="number"
          name="title"
          title="场地号"
          required
          value={form.venueNumber}
          onChange={(title: string) => setForm({ title })}
          placeholder="请输入场地号"
        />

        <MapChoosePoint />
      </AtForm>
    </View>
  );
};

export default CreateActive;
