import { FC } from 'react';
import classNames from 'classnames';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useMergedState } from '@/hooks';
import { v4 as uuidV4, taskLoop } from '@/utils';
import PictureList from './components/PictureList';
import css from './upload.module.scss';
import { UploaderProps, FileItem } from './types';

type TaskParam = { file: FileItem; path: string };

const MUpload: FC<Partial<UploaderProps>> = ({
  value,
  onChange,
  defaultValue,
  listType,
  className,
  deletable,
  limit = Infinity,
}) => {
  const [mergedFileList, setMergedFileList] = useMergedState(defaultValue || [], {
    value: value,
    postState: (list) => list ?? [],
    onChange,
  });

  const selectFile = async () => {
    return Taro.chooseImage({
      count: 9,
      sourceType: ['album', 'camera'],
    });
  };

  const onFileChange = async () => {
    const { tempFilePaths } = await selectFile();

    let list: FileItem[] = [];

    const tasks: TaskParam[] = [];

    /** limit */
    const filesCount = tempFilePaths.length + mergedFileList.length;
    if (typeof limit === 'number' && limit > 0 && filesCount > limit) {
      Taro.showToast({ title: '最多上传' + limit + '张图片', icon: 'none' });
      return;
    }

    /** 构造上传列表 */
    for (let i = 0; i < tempFilePaths.length; i++) {
      const path = tempFilePaths[i];

      const file: FileItem = {
        uid: uuidV4(),
        name: path.split('/').pop(),
        status: 'uploading',
        tempPath: path,
      };

      list.push(file);
      tasks.push({
        file,
        path,
      });

      setMergedFileList([...mergedFileList, ...list]);
    }

    await taskLoop({
      func: uploadFile,
      tasks: tasks.map((task) => [task]),
    });
  };

  const uploadFile = async ({ file, path }: TaskParam) => {
    const key = path.split('/').pop();

    if (!key) {
      return;
    }

    const res = await Taro.cloud.uploadFile({
      cloudPath: key,
      filePath: path,
    });

    const urlRes = await Taro.cloud.getTempFileURL({
      fileList: [res.fileID],
    });

    setMergedFileList((fileList) => {
      return fileList.map((item) => {
        if (item.uid === file.uid) {
          item.status = 'success';
          item.url = urlRes.fileList[0].tempFileURL;
        }
        return item;
      });
    });
  };

  const delFileItem = (file: FileItem) => {
    setMergedFileList((fileList) => {
      return fileList.filter((item) => item.uid !== file.uid);
    });
  };

  return (
    <View className={classNames(css['uploader'], className)}>
      {/* 上传入口 */}
      <>
        {listType === 'picture' && (
          <View className={css['picture-list']}>
            <PictureList
              pictures={mergedFileList}
              deletable={deletable}
              hideBtn={limit <= mergedFileList.length}
              onFileChange={onFileChange}
              onDelete={delFileItem}
            />
          </View>
        )}
      </>

      <View></View>
    </View>
  );
};

export default MUpload;
