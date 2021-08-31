import AccessTokenModel from './accessTokenModel';
import User from './user';

export default interface UserTokenModel {
  User: User;
  UserRoles: string[];
  accessToken: AccessTokenModel;
}
