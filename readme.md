# ERP-Apps
# Objective
Build ERP apps for Small, Medium and Large Organizations<br/>
Re-Write / Build new CRM GUI for existing ERP<br/>
Convert Old Software to new App/UI (Desktop & Mobile) without changing database<br/>
Migrate existing ERP to new platform<br/>
Make an App for existing Oracle, PeopleSoft, SAP, or Siebel CRM or old custom software based ERP<br/>

Other Apps -> CRM App<br/>
Other Apps -> HCM Employee Management App<br/>
Other Apps -> Supply Chain App<br/>
Other Apps -> Inventory Management App<br/>
Other Apps -> Book Keeping App<br/>
Other Apps -> Buy to Pay B2P App<br/>
Other Apps -> Accounts Payables App<br/>
Other Apps -> Accounts Receivables App<br/>
Other Apps -> Vendor Management App<br/>
Other Apps -> Help Desk App<br/>
Other Apps -> Call Center App<br/>
Other Apps -> Order Fullfillment App<br/>
Other Apps -> Product Catalogue<br/>
Other Apps -> Order Fullfillment App<br/>
Other Apps -> Expense Management<br/>
Other Apps -> Assets management<br/>
Other Apps -> Warehouse Management App<br/>

<b>Community Version</b> - All apps are Free download with complete source code for iOS, Android and web.
## Technologies
Click here for Video Tutorials !
#### Option 1:
<b>FrontEnd:</b> Flutter/DART<br/>
<b>Backend:</b> NodeJS/REST API<br/>
<b>Mobile:</b> Flutter (iOS, Android)<br/>
<b>Database:</b> MYSQL or Oracle<br/>
#### Option 2:
<b>FrontEnd:</b> Angular<br/>
<b>Backend:</b> NodeJS/REST API<br/>
<b>Mobile:</b> Apache Cordova (iOS, Android)<br/>
<b>Database:</b> MYSQL or Oracle<br/>
# Do NOT Clone yet, this repository is work in progress and is not complete yet.

# Pro - ERP
HCM<br/>
CRM<br/>
SCM<br/>
CRM, Supply Chain,<br/>
Live Inventory<br/>
Book Keeping<br/>
Expense Management<br/>
Assets management<br/>
<br/>
--------------------
Supply Chain & Inventory Management App (Redux or RxJs and/or React version)<br/><br/>
>> Setup<br/>
Org/Company<br/>
Vendor / Mfg<br/>
Customer<br/>
<br/>
>> Register<br/>
Requisition -> Generate Req and auto PO<br/>
PO  -> Request Inventory<br/>
Receipt -> Receive Inventory<br/>
Payables -> Setup Vendor<br/>
        -> Voucher for Vendor<br/>
        -> Pay Vendor<br/>
Receivables-> Setup Customer<br/>
        -> Invoice for Customer<br/>
        -> Receive<br/>
Sales Register<br/>
# Reports
Inventory Cycle Count<br/>
Inventory Snapshot<br/>
report - On Hand Inventory<br/>
Payables -> Setup Vendor<br/>
        -> Voucher for Vendor<br/>
        -> Pay Vendor<br/>

<h4>FireStoreRules</h4>
<br/>
rules_version = '2';<br/>
service cloud.firestore {<br/>
  match /databases/{database}/documents {<br/>
    match /{document=**} {<br/>
      allow read, write: if false;<br/>
    }<br/>
    <br/>
  match /USER_ROLES/{document} {<br/>
   allow read: if isSignedIn();<br/>
   allow write, delete: if false;<br/>
   }<br/>
   match /USER_SETTINGS/{document} {<br/>
   allow read: if (isSignedIn() && isDocOwner()) || isAdmin();<br/>
   allow create: if isSignedIn();<br/>
   allow update: if (isDocOwner() && onlyContentChanged()) || isAdmin();<br/>
   allow delete: if isAdmin();<br/>
   }<br/>
  // helper functions<br/>
    function isDocOwner(){<br/>
    // assuming document has a field author which is uid<br/>
    // Only the authenticated user who authored the document can read or write<br/>
    	return request.auth.uid == resource.data.author;<br/>
      // This above read query will fail<br/>
    // The query fails even if the current user actually is the author of every story document.<br/>
    //  The reason for this behavior is that when Cloud Firestore applies your security rules, <br/>
    //  it evaluates the query against its potential result set,<br/>
    //   not against the actual properties of documents in your database. <br/>
    //   If a query could potentially include documents that violate your security rules, <br/>
    //   the query will fail.<br/>
    //   to prevent failure, on your client app, make sure to include following<br/>
    //   .where("author", "==", this.afAuth.auth.currentUser.uid)<br/>
    }<br/>
    <br/>
    function isSignedIn() {<br/>
    // check if user is signed in<br/>
          return request.auth.uid != null;<br/>
    }<br/>
    <br/>
    function isAdmin() {<br/>
    return get(/databases/$(database)/documents/USER_SETTINGS/$(request.auth.uid)).data.role == "admin";<br/>
    }<br/>
    <br/>
    function onlyContentChanged() {<br/>
          // Ensure that user is not updating their own roles<br/>
          // fields are added to the document.<br/>
            // return request.resource.data.role == null || request.resource.data.role == resource.data.role;<br/>
            return request.resource.data.role == "" || request.resource.data.role == resource.data.role;<br/>
    }<br/>
}<br/>
}<br/>