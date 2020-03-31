import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { Observable } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
  docId: string = '';
  state: string = '';
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  // data$: Observable<any>;
  savedChanges: boolean = false;
  data$;
  userRole;
  private querySubscription;

  constructor(public auth: AngularFireAuth, private _backendService: BackendService,
    private _router: Router, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.auth.currentUser.then(res => {
      if (res) {
        this.docId = res.uid;
        this.getUserDoc(res.uid);
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

  // getUserDoc(docId) {
  //   this.dataLoading = true;
  //   this.data$ = this._backendService.getDoc("USERS", docId);
  //   this.dataLoading = false;
  // }
  getUserDoc(docId) {
    this.dataLoading = true;
     return this._backendService.getDoc("USERS", docId).subscribe(
      (res) => {
        this.data$ = res;
        this.dataLoading = false;
      },
      error => {
        this.error = true;
        this.errorMessage = error;
        this.dataLoading = false;
      },
      () => this.dataLoading = false
    );
    // this.data$ = this._backendService.getDoc("USERS", docId)
    // .pipe(
    //   switchMap(res => this.userRole = this._backendService.getDoc("ROLES", res["role"]))
    // );
    // this.dataLoading = false;
  }

  onSubmit(formData) {
    this.dataLoading = true;
    this._backendService.setUserDoc("USERS", this.docId, formData)
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

  logout() {
    this.auth.signOut().then(r => {
      this.ngZone.run(() =>
        this._router.navigate(['/login'])
      );
    }
    );
  }
  ngOnDestroy() {
    // this is not needed when observable is used, in this case, we are registering user on subscription
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}