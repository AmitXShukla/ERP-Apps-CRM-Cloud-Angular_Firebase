# Please give a Star * to this repository if you like this project.
# ERP-Apps
# Objective
Build ERP apps for Small, Medium and Large Organizations<br/>
Re-Write / Build new CRM GUI for existing ERP<br/>
Convert Old Software to new App/UI (Desktop & Mobile) without changing database<br/>
Migrate existing ERP to new platform<br/>
Make an App for existing Oracle, PeopleSoft, SAP, or Siebel CRM or old custom software based ERP<br/>

<b>Community Version</b> - All apps are Free download with complete source code for iOS, Android and web.<br>
<a href="https://www.youtube.com/playlist?list=PLp0TENYyY8lHNMTAlrfVQKzAvQo3yzHYk">Click here for Video Tutorials !</a>
<br/>
``` ts
Installation Instructions
Step 1: Install your favorite Code editor
Anroid Studio, IntelliJ community edition, Visual Studio Code

Step 2: download node js
make sure, your windows, linux or mac environment path is setup to the directory where your node.exe file is
for example

Path  = c:\amit.la\Program\node
now run following commands in terminal window
$ node -v
$ npm -v
make sure both the these commands return a valid node and npm version.
now install angular cli
$ npm install -g @angular/cli
// after installation
$ ng version
make sure ng version returns a valid Angular cli version.

Step 3: download this GitHub repository - Fork/Download Zip 
extract all files to your c drive and browse to the directory where you can see package.json
$ npm install --save
make sure installation finished without any error
$ ng serve --open
at this point, your app will serve on localhost:4200 but it show some errors because your firebase in not setup yet

Step 4: Setup Firebase project 
go to -> console.firebase.com
set up a new project
inside your project, click on authentication and enable
email/password, Google and Facebook authentication methods
now setup Firebase rules
please copy paste these rules as-is and make sure, there are no errors anywhere.
```
    
    rules_version = '2';
    service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
    
      match /USER_ROLES/{document} {
    allow read: if isSignedIn();
    allow write, delete: if false;
    }
    match /USER_SETTINGS/{document} {
    allow read: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isDocOwner() && onlyContentChanged()) || isAdmin();
    allow delete: if isAdmin();
    }
    // helper functions
    function isDocOwner(){
    // assuming document has a field author which is uid
    // Only the authenticated user who authored the document can read or write
    	return request.auth.uid == resource.data.author;
      // This above read query will fail
    // The query fails even if the current user actually is the author of every story document.
    //  The reason for this behavior is that when Cloud Firestore applies your security rules, 
    //  it evaluates the query against its potential result set,
    //   not against the actual properties of documents in your database. 
    //   If a query could potentially include documents that violate your security rules, 
    //   the query will fail.
    //   to prevent failure, on your client app, make sure to include following
    //   .where("author", "==", this.afAuth.auth.currentUser.uid)
    }
    
    
    function isSignedIn() {
    // check if user is signed in
          return request.auth.uid != null;
    }
    
    function isAdmin() {
    return get(/databases/$(database)/documents/USER_SETTINGS/$(request.auth.uid)).data.role == "admin";
    }
    
    function onlyContentChanged() {
          // Ensure that user is not updating their own roles
          // fields are added to the document.
            // return request.resource.data.role == null || request.resource.data.role == resource.data.role;
            return request.resource.data.role == "" || request.resource.data.role == resource.data.role;
    }
    }
    }

```ts
Step 5: Create new data collection
as shown in this screen and make sure all documents/fields look exactly the same.
```

<a href="https://www.youtube.com/playlist?list=PLp0TENYyY8lHNMTAlrfVQKzAvQo3yzHYk">YouTube video Part -1 @ 13:08</a>
```ts
USER_ROLES is a collection
admin is a document inside it
admin, addressbook etc each has a “map” inside
Which has four fields each
visible Boolean true
read Boolean true
write Boolean true
delete Boolean true

Step 6: find Firebase Project settings
copy and replace Firebase settings in your app->environments/environment.ts and environment.prod.ts


Step 7: Browse App 
to check if your app is up and running now if not, please open browser console and look for errors

if firebase is not setup properly or settings are not copies correctly, you will see error like invalid API Key.

For any other error please open a new issue and include a screen shot of your terminal and browser console window.
```
Work in progress<br/>
# Pro - ERP

Other Apps -> CRM Cloud<br/>
  Marketting<br/>
  Helpdesk<br/>
  BPO/Call Register<br/>
  Customer Order Fullfillment<br/><br/>
Supply Chain<br/>
  Buy To Pay<br/>
  Customer Order Fullfillment<br/>
  Sales<br/>
  Live Inventory<br/><br/>
Finance<br/>
  Book Keeping<br/>
  Accounts Payable<br/>
  Accounts Receivable<br/>
Expense Management<br/>
Assets management<br/>

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