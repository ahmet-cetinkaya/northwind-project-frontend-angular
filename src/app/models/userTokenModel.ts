import { AccessTokenModel } from './accessTokenModel';
import { User } from './user';

export interface UserTokenModel {
  user: User;
  userRoles: string[];
  accessToken: AccessTokenModel;
}
