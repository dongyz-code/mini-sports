import { useSetState } from 'ahooks';
import { View, Picker } from '@tarojs/components';
import { AtForm, AtInput, AtList, AtListItem } from 'taro-ui';
import ImageUpload from '@/components/ImageUpload';
import MapChoosePoint from '@/components/ChooseLocation';
import { Active } from '@/types';
import { organizerTypes, cancelDeadlines } from '@/constant';
import ChooseDate from '@/components/ChooseDate';
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

        <MapChoosePoint
          value={form.activeAddress}
          onChange={(address) => setForm({ activeAddress: address })}
          label="活动地点"
          placeholder="请选择活动地点"
          required
        />

        <AtInput
          type="number"
          name="title"
          title="场地号"
          value={form.venueNumber}
          onChange={(venueNumber: string) => setForm({ venueNumber })}
          placeholder="请输入场地号"
        />

        <ChooseDate label="活动日期" required value={form.date} onChange={(date: number[]) => setForm({ date })} />

        <Picker
          mode="time"
          value={form.startTime || ''}
          onChange={(e) => {
            setForm({ startTime: e.detail.value });
          }}
        >
          <AtList>
            <AtListItem className={css['required']} title="活动开始时间" extraText={form.startTime} />
          </AtList>
        </Picker>

        <Picker
          mode="selector"
          range={cancelDeadlines}
          rangeKey="label"
          value={form.cancelDeadline || 0}
          onChange={(e) => {
            setForm({ cancelDeadline: e.detail.value as number });
          }}
        >
          <AtList>
            <AtListItem title="取消报名截止时间" extraText={form.startTime} />
          </AtList>
        </Picker>
      </AtForm>
    </View>
  );
};

export default CreateActive;
