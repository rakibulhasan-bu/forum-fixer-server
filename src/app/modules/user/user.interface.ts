import USER_ROLE from "./user.const";

export type TUserRole = keyof typeof USER_ROLE;

export interface TUser {
  name: string;
  email: string;
  avatar: string;
  password: string;
  oldPassword: string;
  moreOldPassword: string;
  role: TUserRole;
}
