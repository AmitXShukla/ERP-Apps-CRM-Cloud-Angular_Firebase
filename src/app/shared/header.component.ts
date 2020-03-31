import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() imageUrl: string;
  @Input() pageTitle: string;
  @Input() helpType: string;
  configData;
  showFiller = true;
  docId: string = '';
  state: string = '';
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  data$: Observable<any>;
  private querySubscription;

  constructor(public auth: AngularFireAuth, private _backendService: BackendService) { }

  ngOnInit(): void {
    this.configData = this._backendService.getConfig("helptext");
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
  getUserDoc(docId) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getDoc("USERS", docId).subscribe(
      (res) => {
        this.data$ = this._backendService.getDoc("ROLES", res["role"])
      },
      error => {
        this.error = true;
        this.errorMessage = error;
        this.dataLoading = false;
      },
      () => this.dataLoading = false
    )
    // this.data$ = this._backendService.getDoc("USERS", docId)
    // .pipe(
    //   switchMap(res => this.userRole = this._backendService.getDoc("ROLES", res["role"]))
    // );
    this.dataLoading = false;
  }
  ngOnDestroy() {
    // this is not needed when observable is used, in this case, we are registering user on subscription
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
