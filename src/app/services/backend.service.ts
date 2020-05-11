import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { firestore } from 'firebase/app';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  configData;
  private userRoleSource = new Subject<string>();
  userRole$ = this.userRoleSource.asObservable();

  constructor(public afAuth: AngularFireAuth, private _afs: AngularFirestore,
    private _storage: AngularFireStorage) {   
  }

  getConfig(configType) {
    configType == "social" ? this.configData = environment.social : "";
    configType == "helptext" ? this.configData = environment.helptext : "";
    return this.configData;
  }

  loginEmail(formData){
return this.afAuth.signInWithEmailAndPassword(formData.data.email, formData.data.password);
  }

  loginSocialAuth(formType) {
    return formType=='FB' ? this.afAuth.signInWithRedirect(new auth.FacebookAuthProvider()) : this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  
  createUser(formData) {
    return this.afAuth.createUserWithEmailAndPassword(formData.data.email, formData.data.password);
  }

  getCollUrls(coll) {
    let _coll = "USER_SETTINGS";
    if (coll == "USERS") { _coll = "USER_SETTINGS"; }
    if (coll == "ROLES") { _coll = "USER_ROLES"; }
    if (coll == "ADDRESSBOOK") { _coll = "USER_ADDRESSBOOK"; }
    if (coll == "CAMPAIGN") { _coll = "USER_CAMPAIGN"; }
    if (coll == "LEADS") { _coll = "USER_LEADS"; }
    if (coll == "OPPURTUNITY") { _coll = "USER_OPPURTUNITY"; }
    if (coll == "APPOINTMENTS") { _coll = "USER_APPOINTMENTS"; }
    if (coll == "CALLS") { _coll = "USER_CALLS"; }
    if (coll == "TICKETS") { _coll = "USER_TICKETS"; }
    if (coll == "WORKORDERS") { _coll = "USER_WORKORDERS"; }
    if (coll == "ORDERS") { _coll = "USER_ORDERS"; }
    return _coll;
  }

  get timestamp() {
    const d = new Date();
    return d;
    // return firebase.firestore.FieldValue.serverTimestamp();
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

  updateDoc(coll,docId, data) {
    const timestamp = this.timestamp
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef.update({
      ...data,
      updatedAt: timestamp,
    }).then((res) => { return true; });
  }

  getDoc(coll: string, docId: string) {
    return this._afs.collection(this.getCollUrls(coll)).doc(docId).valueChanges();
  }
  deleteDoc(coll: string, docId: string) {
    const timestamp = this.timestamp
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef.delete().then((res) => { return true });
  }
  getDocs(coll: string, formData?) {
    if (formData) {
      if (formData.name) {
        return this._afs.collection(this.getCollUrls(coll), ref => ref.where('name', '>=', formData.name)).valueChanges();
      }
      if (formData.phone) {
        return this._afs.collection(this.getCollUrls(coll), ref => ref.where('phone', '>=', formData.phone)).valueChanges();
      }
    } else { // no search critera - fetch all docs
      return this._afs.collection(this.getCollUrls(coll)).valueChanges();
    }
  }

  setDoc(coll: string, data: any, authorID: any) {
    let docId;
    const id = this._afs.createId();
    const item = { id, name };
    if (docId) { item.id = docId; }
    const timestamp = this.timestamp
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(item.id);
    return docRef.set({
      ...data,
      _id: id,
      author: authorID,
      updatedAt: timestamp,
      createdAt: timestamp
    }).then((res) => { return id; });
  }

  updateFileUpload(coll: string, docId: string, filePath: string) {
    const timestamp = this.timestamp;
    const docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef.update({
      files: firestore.FieldValue.arrayUnion(filePath),
      updatedAt: timestamp,
      // username: this.afAuth.auth.currentUser.displayName,
      // useremail: this.afAuth.auth.currentUser.email,
      // author: this.afAuth.auth.currentUser.uid
    });
  }
  getFileDownloadUrl(url) {
    const ref = this._storage.ref(url);
    return ref.getDownloadURL();
  }
  setRole(role) {
    this.userRoleSource.next(role);
  }
}
