import { deleteUserToken, setUserToken } from '../store/auth/auth.actions';

import AccessTokenModel from '../models/accessTokenModel';
import { AppState } from '../store/app.reducer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import LoginModel from '../models/loginModel';
import { Observable } from 'rxjs';
import ResponseModel from '../models/responseModel';
import SingleResponseModel from '../models/singleResponseModel';
import { Store } from '@ngrx/store';
import UserTokenModel from '../models/userTokenModel';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  userToken$: Observable<UserTokenModel | undefined> = this.store
    .select((s) => s.appAuth)
    .pipe(map((b) => b.userToken));

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private store: Store<AppState>
  ) {}

  login(
    loginModel: LoginModel
  ): Observable<SingleResponseModel<UserTokenModel>> {
    return this.httpClient.post<SingleResponseModel<UserTokenModel>>(
      `${this.apiControllerUrl}/login`,
      loginModel
    );
  }

  loggedIn(userTokenModel: UserTokenModel): void {
    this.setUserToken(userTokenModel);
    this.localStorageService.set('tokenModel', userTokenModel.accessToken);
  }

  refresh(): Observable<SingleResponseModel<UserTokenModel>> {
    return this.httpClient.get<SingleResponseModel<UserTokenModel>>(
      `${this.apiControllerUrl}/refresh`
    );
  }

  setUserToken(userToken: UserTokenModel) {
    this.store.dispatch(setUserToken({ userToken }));
  }

  deleteUserToken() {
    this.store.dispatch(deleteUserToken());
  }

  logout() {
    this.localStorageService.remove('tokenModel');
    this.deleteUserToken();
  }
}
