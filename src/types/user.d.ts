export interface IUserDefaultState {
  users: IUser[];
  user?: IUser;
  loading: boolean;
}

export interface IUser {
  [key: string]: any;
}
