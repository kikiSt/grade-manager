import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private readonly backendroute = 'http://test/api';

  constructor(
    private http: HttpClient
  ) {}

  async LoginUser(username: string, password: string) {
    let user: User = await this.http.get<User>(this.backendroute + '/user').toPromise<User>();
    if(user) {
      localStorage.setItem('currentUser', user.GivenName);
    } else {
      localStorage.setItem('currentUser', undefined);
    }
  }
}
