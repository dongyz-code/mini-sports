export interface FiledNames {
  text: string;
  value: string;
  options: string;
}

export interface Res<T> {
  code: number;
  message: string;
  data: T;
}
