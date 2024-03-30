export type LocationRes = {
  status: number;
  message: string;
  data_version: number;
  result: LocationResult[][];
};

export type LocationResult = {
  id: string;
  name: string;
  fullname: string;
  pinyin: string[];
  location: { lat: number; lng: number };
  cidx: number[];
};
