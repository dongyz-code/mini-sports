import type { UserConfigExport } from "@tarojs/cli";

const devConfig: UserConfigExport = {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {},
};

export default devConfig;
