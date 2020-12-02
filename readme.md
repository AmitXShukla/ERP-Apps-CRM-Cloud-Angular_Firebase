```diff
- If you like this project, please consider giving it a star (*) and follow me at GitHub & YouTube.
```
[<img src="https://github.com/AmitXShukla/AmitXShukla.github.io/blob/master/assets/icons/youtube.svg" width=40 height=50>](https://youtube.com/AmitShukla_AI)
[<img src="https://github.com/AmitXShukla/AmitXShukla.github.io/blob/master/assets/icons/github.svg" width=40 height=50>](https://github.com/AmitXShukla)
[<img src="https://github.com/AmitXShukla/AmitXShukla.github.io/blob/master/assets/icons/medium.svg" width=40 height=50>](https://medium.com/@Amit_Shukla)
[<img src="https://github.com/AmitXShukla/AmitXShukla.github.io/blob/master/assets/icons/twitter_1.svg" width=40 height=50>](https://twitter.com/ashuklax)

# ERP-Apps
# Objective
Build ERP apps for Small, Medium and Large Organizations<br/>
Re-Write / Build new CRM GUI App for existing ERP<br/>
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
    }
    match /USER_SETTINGS/{document} {
    allow read: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow create: if isSignedIn() && onlyContentChanged();
    allow update: if (isSignedIn() && isDocOwner() && onlyContentChanged()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_ADDRESSBOOK/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_CAMPAIGN/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_LEADS/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_OPPURTUNITY/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_APPOINTMENTS/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_CALLS/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_TICKETS/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_WORKORDERS/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    match /USER_ORDERS/{document=**} {
    allow read: if (isSignedIn() && isEmployee()) || isAdmin();
    allow create: if isSignedIn();
    allow update: if (isSignedIn() && isDocOwner()) || isAdmin();
    allow delete: if isAdmin();
    }
    // helper functions
    function isSignedIn() {
    return request.auth.uid != null;
    }
    function onlyContentChanged() {
    return request.resource.data.role == "" || request.resource.data.role == resource.data.role;
    // make sure user is not signing in with any role or changin his role during update
    }
    function isDocOwner() {
    return request.auth.uid == resource.data.author;
    }
    function isDocCreater() {
    return request.auth.uid == request.resource.data.author;
    }
    function isAdmin() {
    return get(/databases/$(database)/documents/USER_SETTINGS/$(request.auth.uid)).data.role == "admin";
    }
    function isEmployee() {
    return get(/databases/$(database)/documents/USER_SETTINGS/$(request.auth.uid)).data.role == "employee";
    }
    }
    }

```ts
Step 5: Create new data collection
as shown in this screen and make sure all documents/fields look exactly the same.
```

<a href="https://www.youtube.com/playlist?list=PLp0TENYyY8lHNMTAlrfVQKzAvQo3yzHYk">YouTube video Part -1 @ 13:08</a>
<img src="https://user-images.githubusercontent.com/20031132/79258144-8f462600-7e3f-11ea-8d32-ee39026c015f.png">
<img src="https://user-images.githubusercontent.com/20031132/79186856-a0efe500-7dcf-11ea-998c-890b58fd28e9.png">
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
## Pro Version Enquiries info@elishconsulting.com - ERP

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

HCM Employee Management App<br/>
Supply Chain App<br/>
Inventory Management App<br/>
Book Keeping App<br/>
Buy to Pay B2P App<br/>
Accounts Payables App<br/>
Accounts Receivables App<br/>
Vendor Management App<br/>
Help Desk App<br/>
Call Center App<br/>
Order Fullfillment App<br/>
Product Catalogue<br/>
Order Fullfillment App<br/>
Expense Management<br/>
Assets management<br/>
Warehouse Management App<br/>

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
