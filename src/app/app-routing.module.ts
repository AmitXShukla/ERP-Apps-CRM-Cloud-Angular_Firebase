import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus.component';
import { AdminComponent } from './ui/auth/admin.component';
// auth components
import { LoginComponent } from './ui/auth/login.component';
import { SignupComponent } from './ui/auth/signup.component';
import { SettingsComponent } from './ui/auth/settings.component';
import { CallsComponent } from './ui/callregister/calls.component';
import { AuthGuardService } from './services/auth.guard.service';

// firebase auth guard]
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

// const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['aboutus']);
const redirectLoggedInToSettings = () => redirectLoggedInTo(['settings']);
const hasRole = () => map(user => user ? ['settings'] : ['login']);
// const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);
// const redirectToSettings = () => map(user => user ? ['settings'] : ['login']);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent,  ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToSettings) },
  { path: 'signup', component: SignupComponent, ...canActivate(redirectLoggedInToSettings) },
  { path: 'settings', component: SettingsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'admin', component: AdminComponent, ...canActivate(redirectUnauthorizedToLogin) },
  // { path: 'calls', component: CallsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'calls', component: CallsComponent, canActivate: [AuthGuardService] },
  // { path: 'settings/:id/edit', component: SettingsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }