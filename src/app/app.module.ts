import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DomSanitizer } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
// app components
import { FooterComponent } from './shared/footer.component';
import { HeaderComponent } from './shared/header.component';
import { AboutusComponent } from './shared/aboutus.component';
import { HelpdeskComponent } from './shared/helpdesk.component';
import { SignupComponent } from './ui/auth/signup.component';
import { LoginComponent } from './ui/auth/login.component';
import { SettingsComponent } from './ui/auth/settings.component';
import { AddressComponent } from './ui/addressbook/address.component';
import { CampaignComponent } from './ui/market/campaign.component';
import { LeadComponent } from './ui/market/lead.component';
import { OppurtunityComponent } from './ui/market/oppurtunity.component';
import { ExpensesComponent } from './ui/market/expenses.component';
import { CallsComponent } from './ui/callregister/calls.component';
import { EmailComponent } from './ui/callregister/email.component';
import { EnquiryComponent } from './ui/callregister/enquiry.component';
import { VisitsComponent } from './ui/callregister/visits.component';
import { TicketsComponent } from './ui/helpdesk/tickets.component';
import { WorkorderComponent } from './ui/helpdesk/workorder.component';
import { WoexpensesComponent } from './ui/helpdesk/woexpenses.component';
import { CustomerComponent } from './ui/customer/customer.component';
import { InvoiceComponent } from './ui/customer/invoice.component';
import { BillsComponent } from './ui/customer/bills.component';
import { SalesComponent } from './ui/customer/sales.component';
import { VendorComponent } from './ui/payable/vendor.component';
import { VoucherComponent } from './ui/payable/voucher.component';
import { PaymentsComponent } from './ui/payable/payments.component';
// Agnular Fire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SimpleheaderComponent } from './shared/simpleheader.component';
import { AdminComponent } from './ui/auth/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutusComponent,
    HelpdeskComponent,
    SignupComponent,
    LoginComponent,
    SettingsComponent,
    AddressComponent,
    CampaignComponent,
    LeadComponent,
    OppurtunityComponent,
    ExpensesComponent,
    CallsComponent,
    EmailComponent,
    EnquiryComponent,
    VisitsComponent,
    TicketsComponent,
    WorkorderComponent,
    WoexpensesComponent,
    CustomerComponent,
    InvoiceComponent,
    BillsComponent,
    SalesComponent,
    VendorComponent,
    VoucherComponent,
    PaymentsComponent,
    SimpleheaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatDialogModule,
    MatStepperModule,
    MatExpansionModule,
    MatTableModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'more_vert',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon(
      'dashboard-black',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
    iconRegistry.addSvgIcon(
      'star',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
    iconRegistry.addSvgIcon(
      'phone',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
    iconRegistry.addSvgIcon(
      'email',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
    iconRegistry.addSvgIcon(
      'account_circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
    iconRegistry.addSvgIcon(
      'event',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
    iconRegistry.addSvgIcon(
      'track_changes',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
    iconRegistry.addSvgIcon(
      'language',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
    iconRegistry.addSvgIcon(
      'book',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
    iconRegistry.addSvgIcon(
      'business',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
    iconRegistry.addSvgIcon(
      'place',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
    iconRegistry.addSvgIcon(
      'code',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
    iconRegistry.addSvgIcon(
      'help',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
    iconRegistry.addSvgIcon(
      'clear',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
    iconRegistry.addSvgIcon(
      'vpn',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
    iconRegistry.addSvgIcon(
      'new',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
    iconRegistry.addSvgIcon(
      'cloud',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
    iconRegistry.addSvgIcon(
      'backspace',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
    iconRegistry.addSvgIcon(
      'cached',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
    iconRegistry.addSvgIcon(
      'create',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
    iconRegistry.addSvgIcon(
      'employee',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
    iconRegistry.addSvgIcon(
      'employer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
    iconRegistry.addSvgIcon(
      'equalizer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
    iconRegistry.addSvgIcon(
      'security',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
    iconRegistry.addSvgIcon(
      'radio_on',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
    iconRegistry.addSvgIcon(
      'radio_off',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
    iconRegistry.addSvgIcon(
      'salary',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
    iconRegistry.addSvgIcon(
      'drop_down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter_1.svg'));
  }
}

