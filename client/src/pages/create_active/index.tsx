import { useState } from 'react';
import { useSetState } from 'ahooks';
import { View } from '@tarojs/components';
import { Form, FormItem, Button, Cell, Input, Picker, TextArea, Uploader, Switch } from '@nutui/nutui-react-taro';
import ImageUpload from '@/components/ImageUpload';
import MapChoosePoint from '@/components/ChooseLocation';
import SelectDate from '@/components/MForm/SelectDate';
import { Active } from '@/types';
import { organizerTypes, cancelDeadlines, getOptionLabel, chargeTypes } from '@/constant';
import { RectRight } from '@nutui/icons-react-taro';
import { SelectCalendar } from '@/components/MForm';
import Layout from '@/components/Layout';
import VSelect from '@/components/MForm/Select';
import css from './index.module.scss';

const CreateActive = () => {
  const [form] = Form.useForm();

  /** 表单联动 */
  const [withPeople, setWithPeople] = useState(true);
  const [autoCancel, setAutoCancel] = useState(true);

  const [files, setFiles] = useState<File[]>([]);

  // form.setFieldsValue({

  // })

  const onFileChange = (_files: File[]) => {
    setFiles(_files);
  };

  return (
    <Layout>
      <Form
        form={form}
        className={css['create-active']}
        labelPosition="left"
        onSubmit={(res) => {
          console.log(res);
        }}
        initialValues={{
          test: 2,
        }}
      >
        <Form.Item name="avator">
          <ImageUpload className={css['avator-container']} />
        </Form.Item>

        <FormItem label="标题" name="title" rules={[{ required: true }]}>
          <Input placeholder="请输入标题" />
        </FormItem>

        {/* <Form.Item
          label="组织者类型"
          name="organizerType"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(_e, ref: any) => ref.open()}
        >
          <Picker options={[organizerTypes]}>
            {(value: any) => {
              return (
                <Cell
                  style={{
                    padding: 0,
                  }}
                  className="nutui-cell--clickable"
                  title={value.length ? organizerTypes.filter((po) => po.value === value[0])[0]?.text : '请选择'}
                  extra={<RectRight size={16} />}
                  align="center"
                />
              );
            }}
          </Picker>
        </Form.Item> */}

        <Form.Item label="test" name="test">
          <VSelect options={cancelDeadlines} mode="multiple" />
        </Form.Item>

        <Form.Item name="activeAddress" label="活动地点" rules={[{ required: true }]}>
          <MapChoosePoint />
        </Form.Item>

        <Form.Item name="venueNumber" label="请输入场地号">
          <Input placeholder="请输入场地号" />
        </Form.Item>

        <Form.Item label="活动日期" name="data" rules={[{ required: true }]}>
          <SelectCalendar type="multiple" />
        </Form.Item>
        <Form.Item label="活动开始时间" name="data" rules={[{ required: true }]}>
          <SelectDate type="hour-minutes" />
        </Form.Item>
        <Form.Item label="活动结束时间" name="data">
          <SelectDate type="hour-minutes" />
        </Form.Item>

        <Form.Item
          label="取消报名截止时间"
          name="cancelDeadline"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(_e, ref: any) => ref.open()}
          className={css['label-150']}
        >
          <Picker options={[cancelDeadlines]}>
            {(value: any) => {
              return (
                <Cell
                  style={{
                    padding: 0,
                  }}
                  className="nutui-cell--clickable"
                  title={value.length ? cancelDeadlines.filter((po) => po.value === value[0])[0]?.text : '请选择'}
                  extra={<RectRight size={16} />}
                  align="center"
                />
              );
            }}
          </Picker>
        </Form.Item>

        <Form.Item className={css['label-block']} name="desc" label="活动描述">
          <TextArea className={css['textarea-desc']} showCount maxLength={200}></TextArea>
        </Form.Item>

        <Form.Item
          label="收费类型"
          name="chargeType"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(_e, ref: any) => ref.open()}
          rules={[{ required: true }]}
        >
          <Picker options={[chargeTypes]}>
            {(value: any) => {
              return (
                <Cell
                  style={{
                    padding: 0,
                  }}
                  className="nutui-cell--clickable"
                  title={value.length ? chargeTypes.filter((po) => po.value === value[0])[0]?.text : '请选择'}
                  extra={<RectRight size={16} />}
                  align="center"
                />
              );
            }}
          </Picker>
        </Form.Item>

        <FormItem label="报名人数" name="applyNumbers" rules={[{ required: true }]}>
          <Input placeholder="请输入标报名人数" />
        </FormItem>

        <FormItem label="报名人费用" name="applyFare" rules={[{ required: true }]}>
          <Input placeholder="请输入标报名费用(元)" />
        </FormItem>
        <Form.Item label="添加图片" name="picture" className={css['label-block']}>
          <Uploader
            url="https://my-json-server.typicode.com/linrufeng/demo/posts"
            maxCount={9}
            multiple
            maxFileSize={1024 * 1024 * 15}
            mediaType={['image']}
          />
        </Form.Item>
        <View className={css['partition']}>更多设置</View>
        <FormItem label="允许挂人" name="withPeople">
          <Switch onChange={(val) => setWithPeople(val)} />
        </FormItem>
        {withPeople && (
          <Form.Item
            label="挂人限制"
            name="withPeopleLimit"
            trigger="onConfirm"
            getValueFromEvent={(...args) => args[1]}
            onClick={(_e, ref: any) => ref.open()}
          >
            <Picker options={[cancelDeadlines]}>
              {(value: any) => {
                return (
                  <Cell
                    style={{
                      padding: 0,
                    }}
                    className="nutui-cell--clickable"
                    title={value.length ? cancelDeadlines.filter((po) => po.value === value[0])[0]?.text : '请选择'}
                    extra={<RectRight size={16} />}
                    align="center"
                  />
                );
              }}
            </Picker>
          </Form.Item>
        )}

        <View className={css['partition']}>组织者信息</View>
        <FormItem label="联系人" name="userName">
          <Input placeholder="" />
        </FormItem>

        <FormItem label="联系电话" name="phone" rules={[{ required: true }]}>
          <Input placeholder="" />
        </FormItem>

        <FormItem label="微信号" name="weixin">
          <Input placeholder="" />
        </FormItem>

        <Form.Item>
          <Button formType="submit" block type="primary">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default CreateActive;
