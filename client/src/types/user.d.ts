type Gender = 'F' | 'M';

export interface User {
  user_id: string;
  open_id: string;
  username: string;
  avatar: string;
  email?: string;
  phone?: string;
  weixin?: string;
  level?: number;
  height?: number;
  weight?: number;
  gender?: Gender;
  update_time?: string;
}

export interface RegisterUserParam {
  code: string;
  username: string;
  avatar: string;
  gender?: Gender;
}
