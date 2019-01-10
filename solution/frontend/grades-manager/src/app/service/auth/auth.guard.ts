import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()

/**
 * @author Danijel Malinovic
 */
export class AuthGuard implements CanActivate {

    constructor(
      private router: Router,
      private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.user) {
            return true;
        }

        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
