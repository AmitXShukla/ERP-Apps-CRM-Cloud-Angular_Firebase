import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus.component';
import { LoginComponent } from './ui/auth/login.component';
import { SignupComponent } from './ui/auth/signup.component';
import { AdminComponent } from './ui/auth/admin.component';
import { SettingsComponent } from './ui/auth/settings.component';

// firebase auth guard]
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['aboutus']);
const redirectLoggedInToSettings = () => redirectLoggedInTo(['settings']);
const hasRole = () => map(user => user ? ['settings'] : ['login']);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent,  ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToSettings) },
  { path: 'signup', component: SignupComponent, ...canActivate(redirectLoggedInToSettings) },
  { path: 'settings', component: SettingsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'admin', component: AdminComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
