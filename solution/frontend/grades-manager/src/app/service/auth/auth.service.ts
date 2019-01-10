import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

/**
 * @author Danijel Malinovic
 */
export class AuthService  {

  private readonly backendroute = 'http://test/api';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  async tryLoginUser(username: string, password: string) {
    let user: User = await this.http.get<User>(this.backendroute + '/user').toPromise<User>();

    user ? this.userService.user = user : this.userService.user = undefined;
  }
}
