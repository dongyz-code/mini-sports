import Taro from '@tarojs/taro';
import { useState } from 'react';
import { useMount } from 'ahooks';
import { omit } from 'lodash-es';
import { View } from '@tarojs/components';
import { Form, FormItem, Button, Input, TextArea, Switch, InputNumber } from '@nutui/nutui-react-taro';
import Layout from '@/components/Layout';
import ImageUpload from '@/components/ImageUpload';
import MapChoosePoint from '@/components/ChooseLocation';
import SelectDate from '@/components/MForm/SelectDate';
import { cancelDeadlines, chargeTypes, takeLimit } from '@/constant';
import { MSelectCalendar, MSelect, MUpload } from '@/components/MForm';
import { httpCreateActive } from '@/services';
import { FileItem } from '@/components/MForm/Upload/types';
import { AddActiveParam } from '@/types';
import css from './index.module.scss';

type ActiveForm = Omit<AddActiveParam, 'active_start_time' | 'active_end_time' | 'pictures'> & {
  active_start_time: [string, string];
  active_end_time: [string, string];
  pictures: FileItem[];
};

const initialValue: ActiveForm = {
  avatar:
    'https://ts1.cn.mm.bing.net/th/id/R-C.9e45a633e95179a37c907fa2797999ad?rik=aMuPS4TunAh5ZA&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303214Q2.jpg&ehk=P%2firfYpARc1fHht%2bWpapYR4W15p6SLABE8CBexoeon4%3d&risl=&pid=ImgRaw&r=0',
  title: '这是一个活动',
  charge_type: 'offline',
  venue_number: '1212',
  active_date: ['2024/03/05', '2024/03/06'],
  active_start_time: ['03', '05'],
  active_end_time: ['18', '00'],
  registration_deadline: 1,
  desc: '活动描述',
  registration_count: 12,
  registration_fee: 120,
  address: {
    name: '朝阳区人民政府(神路街西)',
    address: '北京市朝阳区日坛北路33号',
    latitude: 39.9219,
    longitude: 116.44355,
  },
  pictures: [
    {
      uid: '-29a8dc73-238d-40657-89a55-edd2',
      name: 'j0EtdstHBXzu7efd0a04e9172d38a7ebaed79a9565cc.png',
      status: 'success',
      tempPath: 'http://tmp/j0EtdstHBXzu7efd0a04e9172d38a7ebaed79a9565cc.png',
      url: 'https://7370-sport-prod-3g9linkv4aae0684-1319651730.tcb.qcloud.la/j0EtdstHBXzu7efd0a04e9172d38a7ebaed79a9565cc.png',
    },
  ],
  auto_cancel: true,
  allow_guests: true,
  max_guests: 1,
  username: '董昱泽',
  phone: '16609950990',
  weixin: '16609950990',
  organizer_type: 'people',
};

const CreateActive = () => {
  const [form] = Form.useForm();

  /** 表单联动 */
  const [allow_guests, setWithPeople] = useState(false);
  const [auto_cancel, setAutoCancel] = useState(false);
  const [charge_type, setChargeType] = useState<string>();

  const [loading, setLoading] = useState(false);

  /** 创建活动 */
  const handleAddActive = async (active: ActiveForm) => {
    try {
      setLoading(true);
      const param = handleAddParams(active);

      const res = await httpCreateActive(param);

      if (res?.code === 200) {
        Taro.showToast({
          title: '创建成功',
          icon: 'success',
        });
      } else {
        Taro.showToast({
          title: res.message,
          icon: 'error',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAddParams = (active: ActiveForm) => {
    const {
      pictures,
      active_start_time,
      active_end_time,
      registration_fee,
      registration_count,
      date_limit,
      numbers_limit,
      address,
      ...rest
    } = active;

    return {
      ...rest,
      address: omit(address, 'errMsg'),
      pictures: pictures?.map((p) => p.url!).filter(Boolean),
      active_start_time: active_start_time?.join(':'),
      active_end_time: active_end_time?.join(':'),
      registration_fee: Number(registration_fee),
      registration_count: Number(registration_count),
      date_limit: date_limit && Number(date_limit),
      numbers_limit: numbers_limit && Number(numbers_limit),
    };
  };

  const handleInitFormValue = () => {
    form.setFieldsValue(initialValue);
    setWithPeople(initialValue.allow_guests);
    setAutoCancel(initialValue.auto_cancel);
    setChargeType(initialValue.charge_type);
  };

  useMount(() => {
    handleInitFormValue();
  });

  return (
    <Layout>
      <Form form={form} className={css['create-active']} labelPosition="left" onFinish={handleAddActive}>
        <Form.Item name="avatar" rules={[{ required: true }]}>
          <ImageUpload className={css['avatar-container']} />
        </Form.Item>

        <FormItem label="标题" name="title" rules={[{ required: true }]}>
          <Input placeholder="请输入标题" />
        </FormItem>

        <Form.Item name="address" label="活动地点" rules={[{ required: true }]}>
          <MapChoosePoint />
        </Form.Item>

        <Form.Item name="venue_number" label="请输入场地号">
          <Input placeholder="请输入场地号" />
        </Form.Item>

        <Form.Item label="活动日期" name="active_date" rules={[{ required: true }]}>
          <MSelectCalendar type="multiple" />
        </Form.Item>

        <Form.Item label="活动开始时间" name="active_start_time" rules={[{ required: true }]}>
          <SelectDate type="hour-minutes" />
        </Form.Item>

        <Form.Item label="活动结束时间" name="active_end_time">
          <SelectDate type="hour-minutes" />
        </Form.Item>

        <Form.Item label="报名截止时间" name="registration_deadline" className={css['label-150']}>
          <MSelect options={cancelDeadlines}></MSelect>
        </Form.Item>

        <Form.Item className={css['label-block']} name="desc" label="活动描述">
          <TextArea className={css['textarea-desc']} showCount maxLength={200}></TextArea>
        </Form.Item>

        <Form.Item label="收费类型" name="charge_type" rules={[{ required: true }]}>
          <MSelect options={chargeTypes} onChange={setChargeType}></MSelect>
        </Form.Item>

        {charge_type === 'qrcode' && (
          <Form.Item label="收款码" name="qr_code_image" className={css['label-block']} rules={[{ required: true }]}>
            <MUpload limit={1} listType="picture" deletable />
          </Form.Item>
        )}

        <FormItem label="报名人数" name="registration_count" rules={[{ required: true }]}>
          <Input placeholder="请输入标报名人数" type="number" />
        </FormItem>

        <FormItem label="报名人费用" name="registration_fee" rules={[{ required: true }]}>
          <Input placeholder="请输入标报名费用(元)" type="digit" />
        </FormItem>

        <Form.Item label="添加图片" name="pictures" className={css['label-block']}>
          <MUpload limit={9} multiple listType="picture" deletable />
        </Form.Item>

        <View className={css['partition']}>更多设置</View>
        <FormItem label="允许挂人" name="allow_guests" valuePropName="checked">
          <Switch onChange={setWithPeople} />
        </FormItem>

        {allow_guests && (
          <Form.Item label="挂人限制" name="max_guests">
            <MSelect options={takeLimit}></MSelect>
          </Form.Item>
        )}

        <FormItem label="自动取消活动" name="auto_cancel" valuePropName="checked">
          <Switch onChange={setAutoCancel} />
        </FormItem>

        {auto_cancel && (
          <>
            <FormItem label="开场前(小时)" name="date_limit" rules={[{ required: true }]}>
              <InputNumber min={1} max={23} step="1" />
            </FormItem>

            <FormItem label="人数不足(人)" name="numbers_limit" rules={[{ required: true }]}>
              <InputNumber min={0} step="1" />
            </FormItem>
          </>
        )}

        <View className={css['partition']}>组织者信息</View>
        <FormItem label="联系人" name="username">
          <Input placeholder="" />
        </FormItem>

        <FormItem label="联系电话" name="phone" rules={[{ required: true }]}>
          <Input placeholder="" />
        </FormItem>

        <FormItem label="微信号" name="weixin">
          <Input placeholder="" />
        </FormItem>

        <Form.Item>
          <Button formType="submit" loading={loading} block type="primary">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default CreateActive;
