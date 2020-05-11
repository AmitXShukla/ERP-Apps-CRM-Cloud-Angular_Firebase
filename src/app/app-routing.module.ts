import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus.component';
import { LoginComponent } from './ui/auth/login.component';
import { SignupComponent } from './ui/auth/signup.component';
import { AdminComponent } from './ui/auth/admin.component';
import { SettingsComponent } from './ui/auth/settings.component';
import { AddressComponent } from './ui/addressbook/address.component';

// CRM Cloud
import { CampaignComponent } from './ui/market/campaign.component';
import { LeadComponent } from './ui/market/lead.component';
import { OpportunityComponent } from './ui/market/opportunity.component';
import { AppointmentsComponent } from './ui/helpdesk/appointments.component';
import { TicketsComponent } from './ui/helpdesk/tickets.component';
import { WorkordersComponent } from './ui/helpdesk/workorders.component';
import { OrdersComponent } from './ui/orders/orders.component';
import { CallsComponent } from './ui/callregister/calls.component';

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
  { path: 'addressbook', component: AddressComponent,  ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToSettings) },
  { path: 'signup', component: SignupComponent, ...canActivate(redirectLoggedInToSettings) },
  { path: 'settings', component: SettingsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'admin', component: AdminComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'campaign', component: CampaignComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'lead', component: LeadComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'opportunity', component: OpportunityComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'appointment', component: AppointmentsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'ticket', component: TicketsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'workorder', component: WorkordersComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'order', component: OrdersComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'call', component: CallsComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
