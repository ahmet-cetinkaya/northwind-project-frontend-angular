import { createAction, props } from '@ngrx/store';

import UserTokenModel from 'src/app/models/userTokenModel';

export const setUserToken = createAction(
  'Set User Token',
  props<{ userToken: UserTokenModel }>()
);

export const deleteUserToken = createAction('Delete User Token');
