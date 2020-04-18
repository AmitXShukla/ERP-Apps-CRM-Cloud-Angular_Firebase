import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../shared/router.animations';
import { environment } from '../../../environments/environment';
import { BackendService } from '../../services/backend.service';
import { DBInBoundData, DBOutBoundData } from '../../services/datamodel';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@fallIn]': '' }
})

export class SignupComponent implements OnInit {

  state: string = ''; // required for router animation
  dataLoading: boolean = false; // spinner boolean
  IBData: DBInBoundData; // inbound data
  OBData: DBOutBoundData; // outbound data

  constructor(public auth: AngularFireAuth, private _router: Router, private _backendService: BackendService) { }

  ngOnInit() {
    this.IBData = {
      error: false,
      statusCode: 0, // 0 initial, 1 saved, 2 others
      statusMessage: "", // error or success message from server
      rowCount: 0, // number of rows returned
      data: "" // actual data
    } // inbound data
    this.OBData = {
      rowCount: 1,
      recordType: "signup",
      data: ""
    }; // outbound data
  }

  onSubmit(formData) {
    this.dataLoading = true;
    this.OBData.data = formData;
    return this._backendService.createUser(this.OBData).then(res => {
        this.IBData.error = false;
        this.IBData.statusCode =  1;
        this.IBData.statusMessage =  res.user.email;
      }).catch(error => {
        this.IBData.error = true;
        this.IBData.statusCode =  0;
        this.IBData.statusMessage =  error;
      }).then(r => this.dataLoading=false);
  }

  routeLoginPage() {
    this._router.navigate(['/login']);
  }
}
