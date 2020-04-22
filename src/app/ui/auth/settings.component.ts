import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  savedChanges: boolean = false;
  dataLoading: boolean = false;
  error: boolean = false;
  errorMessage: String = "";
  authState: any = null;
  newUser: boolean = false;
  data$;

  constructor(public afAuth: AngularFireAuth, private _backendService: BackendService, private _router: Router) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(authState => {
      this.authState = authState;
      this.getUserDoc();
    })
  }

  onSubmit_newuser(formData) {
    this.dataLoading = true;
    this._backendService.setUserDoc("USERS", this.authState.uid, formData)
      .then(
        res => {
          if (res) {
            this.savedChanges = true;
            this.errorMessage = "Changes are saved";
            this.dataLoading = false;
          }
        })
      .catch(e => {
        if (e) {
          this.error = true;
          this.errorMessage = e.message;
          this.dataLoading = false;
        }
      });
  }
  onSubmit_update(formData) {
    this.dataLoading = true;
    this._backendService.updateDoc("USERS", this.authState.uid, formData)
      .then(
        res => {
          if (res) {
            this.savedChanges = true;
            this.errorMessage = "Changes are saved";
            this.dataLoading = false;
          }
        })
      .catch(e => {
        if (e) {
          this.error = true;
          this.errorMessage = e.message;
          this.dataLoading = false;
        }
      });
  }
  getUserDoc() {
    this.dataLoading = true;
    return this._backendService.getDoc("USERS", this.authState.uid).subscribe(
      (res) => {
        if (res) {
          this.data$ = res;
        } else {
          this.newUser = true;
        }
        this.dataLoading = false;
      },
      error => {
        this.newUser = true;
        this.error = true;
        this.errorMessage = error;
        this.dataLoading = false;
      },
      () => this.dataLoading = false
    );
  }

  logout() {
    this.afAuth.signOut().then(res => {
      this._router.navigate(['/login']);
    }).catch(e => {
      this._router.navigate(['/login'])
  });
  }
}
