import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DBInBoundData, DBOutBoundData } from './datamodel';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { firestore } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  configData;
  private configDataSource = new Subject<any>();
  public configDataSource$ = this.configDataSource.asObservable();

  constructor(public afAuth: AngularFireAuth, private _afs: AngularFirestore, 
    private _http: HttpClient, private _storage: AngularFireStorage) { }

  getCollUrls(coll) {
    let _coll = "USER_SETTINGS";
    if (coll == "USERS") { _coll = "USER_SETTINGS"; }
    if (coll == "ROLES") { _coll = "USER_ROLES"; }
    return _coll;
  }
  get timestamp() {
    const d = new Date();
    return d;
    // return firebase.firestore.FieldValue.serverTimestamp();
  }
  createUser(formData) {
    return this.afAuth.createUserWithEmailAndPassword(formData.data.email, formData.data.password);
  }
  loginEmail(formData) {
    return this.afAuth.signInWithEmailAndPassword(formData.data.email, formData.data.password)
  }
  loginSocialAuth(formType) {
    return formType == "FB" ? this.afAuth.signInWithRedirect(new auth.FacebookAuthProvider()) : this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  getConfig(configType) {
    configType == "social" ? this.configData = environment.social : "";
    configType == "helptext" ? this.configData = environment.helptext : "";
    return this.configData;
  }
  getUserDoc(data$: Observable<any>) {
      this.configDataSource.next(data$);
      return this.configDataSource$;
  }
  setUserDoc(coll,docId, data) {
    const timestamp = this.timestamp
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef.set({
      ...data,
      author: docId,
      updatedAt: timestamp,
      createdAt: timestamp
    }).then((res) => { return true; });
  }

  getDoc(coll: string, docId: string) {
    return this._afs.collection(this.getCollUrls(coll)).doc(docId).valueChanges();
  }
  getDocs(coll: string, formData?) {
    if (formData) {
      if (formData.name) {
        return this._afs.collection(this.getCollUrls(coll), ref => ref.where('name', '==', formData.name)).valueChanges();
      }
      if (formData.email) {
        return this._afs.collection(this.getCollUrls(coll), ref => ref.where('email', '>=', formData.email)).valueChanges();
      }
    } else { // no search critera - fetch all docs
      return this._afs.collection(this.getCollUrls(coll)).valueChanges();
    }
  }

  updateDoc(coll: string, docId: string, data: any) {
    const timestamp = this.timestamp
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef.update({
        ...data,
        updatedAt: timestamp
    }).then((res) => { return true });
  }
  deleteDoc(coll: string, docId: string) {
    const timestamp = this.timestamp
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef.delete().then((res) => { return true });
  }

  // REVIEW all functions below

  // getConfigData() {
  //   return this._afs.collection(this.getCollUrls('CONFIG')).doc('config_doc').valueChanges();
  // }

  // OLDgetDoc(formData) {
  //   let fakeResponse_1: DBInBoundData = {
  //     error: true,
  //     statusCode: 0,
  //     statusMessage: "User Id is invalid",
  //     rowCount: 0, // number of rows returned
  //     "data": {
  //       "authtoken": ""
  //     }
  //   };
  //   let fakeResponse_2: DBInBoundData = {
  //     error: true,
  //     statusCode: 0,
  //     statusMessage: "Password not valid.",
  //     rowCount: 0, // number of rows returned
  //     "data": {
  //       "authtoken": ""
  //     }
  //   };
  //   let fakeResponse_3: DBInBoundData = {
  //     error: false,
  //     statusCode: 1,
  //     statusMessage: "Authentication Successful.",
  //     rowCount: 1, // number of rows returned
  //     "data": {
  //       "authtoken": "abcd"
  //     }
  //   };

  //   return Observable.create(observer => { setTimeout(() => { observer.next(fakeResponse_3) }, 2000) });
  // }



  // setDoc(coll: string, data: any, docId?: any) {
  //   const id = this._afs.createId();
  //   const item = { id, name };
  //   if (docId) { item.id = docId; }
  //   const timestamp = this.timestamp
  //   var docRef = this._afs.collection(this.getCollUrls(coll)).doc(item.id);
  //   return docRef.set({
  //     ...data,
  //     _id: id,
  //     updatedAt: timestamp,
  //     createdAt: timestamp
  //   }).then((res) => { return id; });
  // }

  
  
  // updateDoc(coll: string, docId: string, data: any) {
  //   const timestamp = this.timestamp
  //   var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
  //   return docRef.update({
  //     ...data,
  //     updatedAt: timestamp
  //   }).then((res) => { return true });
  // }
  // updateCheckOutDoc(coll: string, formData) {
  //   const timestamp = this.timestamp
  //   if (formData.phone) {
  //     return this._afs.collection(this.getCollUrls(coll), ref => ref.where('phone', '==', formData.phone).where('checkOutAt', '==', '')).snapshotChanges().subscribe(items => {
  //       items.forEach(job => {
  //         this._afs.collection(this.getCollUrls(coll)).doc(job.payload.doc.id).update({
  //           checkOutAt: timestamp,
  //           updatedAt: timestamp
  //         });
  //       })
  //     });
  //   }
  //   // var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
  //   // return docRef.update({
  //   //   checkOutAt: timestamp,
  //   //   updatedAt: timestamp
  //   // }).then((res) => { return true });
  // }

  // updateFileUpload(coll: string, docId: string, filePath: string) {
  //   const timestamp = this.timestamp;
  //   const docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
  //   return docRef.update({
  //     files: firestore.FieldValue.arrayUnion(filePath),
  //     updatedAt: timestamp
  //   });
  // }

  // getFileDownloadUrl(url) {
  //   const ref = this._storage.ref(url);
  //   return ref.getDownloadURL();
  // }
}
