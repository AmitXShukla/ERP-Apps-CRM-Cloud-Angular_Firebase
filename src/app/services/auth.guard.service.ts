import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { BackendService } from './backend.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
    userRole$;

  constructor (public auth: AngularFireAuth, private _backendService: BackendService, private _router: Router) { }
  async canActivate(): Promise<boolean> {
        this.userRole$ = await this.auth.user.subscribe(res => {
            console.log(res.uid)
          if (res) {
            return this._backendService.getDoc("USERS", res.uid);
          }
        });
          console.log(this.userRole$)
        //   console.log(authenticatedUser);
          return true;
        //   const authenticated = !!authenticatedUser;
        //   if (!authenticated) {
        //     this._router.navigate(['/login']);
        //   }
        //   return authenticated;
      }
}