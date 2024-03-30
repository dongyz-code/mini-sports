import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export function getDirname(url: string) {
  return dirname(fileURLToPath(url));
}
