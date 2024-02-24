/**
 * 任务队列
 */
export async function taskLoop<T extends (...args: any[]) => Promise<any>>({
  func,
  tasks,
  options,
}: {
  func: T;
  tasks: Array<Parameters<T>[number][]>;
  options?: {
    speed?: number;
  };
}) {
  const result: ReturnType<T>[] = [];
  const taskLength = tasks.length;
  const speed = options?.speed || 10;

  if (!taskLength) {
    return [];
  }
  let runingTask = 0;
  let index = 0;
  let downTask = 0;

  const runTask = async (i: number) => {
    result[i] = await func(...tasks[i]);
  };

  await new Promise((resolve) => {
    const min = async () => {
      while (runingTask <= speed && index < taskLength) {
        const promise = runTask(index);
        /** 当前任务下标 +1 */
        index++;
        /** 正在执行任务数量 +1 */
        runingTask++;
        promise.then(() => {
          runingTask--;
          downTask++;

          if (downTask === taskLength) {
            resolve(1);
          } else {
            min();
          }
        });
      }
    };

    min();
  });

  return result;
}
