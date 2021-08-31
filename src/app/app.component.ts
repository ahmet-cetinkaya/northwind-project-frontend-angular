import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.authRefresh();
  }

  authRefresh() {
    this.authService.refresh().subscribe((response) => {
      if (!response.Success) return;

      this.authService.loggedIn(response.Data);
    });
  }
}
