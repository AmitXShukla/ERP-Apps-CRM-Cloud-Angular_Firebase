import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../shared/router.aimations';
import { environment } from '../../../environments/environment';
import { BackendService } from '../../services/backend.service';
import { DBInBoundData, DBOutBoundData } from '../../services/datamodel';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@fallIn]': '' }
})
export class LoginComponent implements OnInit {

  showPage: boolean = true;
  showFiller: boolean = true;
  socialAuth: boolean = false; // show Google and FB Sign in only when social auth is enabled
  state: string = ''; // required for router animation
  dataLoading: boolean = false; // spinner boolean
  IBData: DBInBoundData; // inbound data
  OBData: DBOutBoundData; // outbound data

  constructor(public auth: AngularFireAuth, private _backendService: BackendService) { }

  ngOnInit() {
    if (environment.socialAuthEnabled) {
      this.socialAuth = true; // show Google and FB Sign in only when social auth is enabled
    }
    this.IBData = {
      error: false,
      statusCode: 0, // 0 initial, 1 saved, 2 others
      statusMessage: "", // error or success message from server
      rowCount: 0, // number of rows returned
      data: "" // actual data
    } // inbound data
    this.OBData = {
      rowCount: 1,
      recordType: "login",
      data: ""
    }; // outbound data
  }

  loginEmail(formData) {
    this.dataLoading = true;
    this.OBData.data = formData;
    return this._backendService.loginEmail(this.OBData).then(res => {
      this.IBData.error = false;
      this.IBData.statusCode = 1;
    }).catch(error => {
      this.IBData.error = true;
      this.IBData.statusCode = 0;
      this.IBData.statusMessage = error;
    }).then(r => this.dataLoading = false);
  }
  loginSocial(formType) {
    this.dataLoading = true;
    return this._backendService.loginSocialAuth(formType).then(res => {
      this.IBData.error = false;
      this.IBData.statusCode = 1;
    }).catch(error => {
      this.IBData.error = true;
      this.IBData.statusCode = 0;
      this.IBData.statusMessage = error;
    }).then(r => this.dataLoading = false);
  }

  logout() {
    // this.dataLoading = true;
    // return this._backendService.logout().then(res => {
    //   this.IBData.error = false;
    //   window.localStorage.removeItem("authtoken");
    //   this.IBData.statusCode = 0;
    // }).catch(error => {
    //   this.IBData.error = true;
    //   this.IBData.statusCode = 0;
    //   this.IBData.statusMessage = error;
    // }).then(r => this.dataLoading = false);
    window.localStorage.removeItem("authUIToken");
    this.auth.signOut();
  }
}
