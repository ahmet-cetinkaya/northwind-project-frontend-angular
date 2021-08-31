import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import User from 'src/app/models/user';
import UserTokenModel from 'src/app/models/userTokenModel';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss'],
})
export class NaviComponent implements OnInit {
  user: Observable<User | undefined> = this.authService.userToken$.pipe(
    map((userToken) => userToken?.User)
  );

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
