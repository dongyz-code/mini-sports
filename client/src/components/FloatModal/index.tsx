import react, { FC } from 'react';
import { View, Text, Button } from '@tarojs/components';
import './index.scss';

interface FloatModalProps {
  open: boolean;
  title: string;
  height?: number;
  onClose: () => void;
  onOk?: () => void;
  children: react.ReactElement;
}

const FloatModal: FC<FloatModalProps> = ({ open, title, children, height = 700, onClose, onOk }) => {
  return (
    <View className={open ? 'float-layout active' : 'float-layout'}>
      <View className="float-layout__overlay" onClick={onClose}></View>
      <View className="float-layout__container layout">
        <View className="layout-header">
          <Button className="header-btn" plain onClick={onClose}>
            取消
          </Button>
          <Text>{title}</Text>
          <Button className="header-btn confirm-btn" plain onClick={onOk}>
            确定
          </Button>
        </View>
        <View className="layout-body" style={{ height: `${height}rpx` }}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default FloatModal;
