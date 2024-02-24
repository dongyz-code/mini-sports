function pad4(num: number): string {
  const hex = num.toString(16);
  return '0000'.substr(0, 4 - hex.length) + hex;
}

export function v4() {
  const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const timestamp = new Date().getTime();
  const random1 = getRandomInt(0, 0xffff);
  const random2 = getRandomInt(0, 0xffff);

  return (
    pad4(timestamp & 0xffffffff) +
    '-' +
    pad4((timestamp >>> 32) & 0xffff) +
    '-4' +
    pad4((timestamp >>> 48) & 0x0fff) +
    '-8' +
    pad4((random1 & 0x3fff) | 0x8000) +
    '-' +
    pad4(random2 & 0xffff)
  );
}
