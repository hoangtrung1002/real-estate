export enum PageState {
  SIGNIN,
  SIGNUP,
}

enum UserRole {
  ADMIN,
  AGENT,
  USER,
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  agent: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseResponse {
  success: boolean;
  mess: string;
}

export interface RegisterResponse extends BaseResponse {}

export interface SignInResponse extends RegisterResponse {
  accessToken: string;
}

export interface CurrentUserResponse extends BaseResponse {
  user: User;
}
