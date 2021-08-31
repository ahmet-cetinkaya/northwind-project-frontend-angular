import { createReducer, on } from '@ngrx/store';
import { deleteUserToken, setUserToken } from './auth.actions';

import UserTokenModel from 'src/app/models/userTokenModel';

export interface AuthState {
  userToken?: UserTokenModel;
}

const initialAuthState: AuthState = {
  userToken: undefined,
};

export const AuthReducer = createReducer(
  initialAuthState,
  on(setUserToken, (state: AuthState, { userToken }) => ({
    ...state,
    userToken,
  })),
  on(deleteUserToken, (state: AuthState) => ({
    ...state,
    userToken: undefined,
  }))
);
