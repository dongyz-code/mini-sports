import * as path from 'node:path';
import { getDirname } from 'src/utils';

/** 服务端根目录 */
export const APP_ROOT_DIR = path.resolve(__dirname, '../../');

/** 服务端根目录 */
export const APP_SRC_DIR = path.resolve(__dirname, '../');

/** 静态资源文件目录 */
export const STATIC_DIR = path.resolve(APP_ROOT_DIR, 'static-data');

/** 项目运行产生的所有文件 */
export const FILES_DIR = path.resolve(APP_ROOT_DIR, 'static');
/** 日志文件路径 */
export const LOG_DIR = path.resolve(FILES_DIR, 'logs');

/** 允许跨域的地址列表 */
export const CORS_LIST = [];
