export class DBInBoundData {
    // error: boolean = false;
    // statusCode : number = 0; // 0 initial, 1 saved, 2 others
    // statusMessage : string = ""; // error or success message from server
    // rowCount : number = 0; // number of rows returned
    // data: any; // actual data
    error: boolean;
    statusCode: number; // 0 initial, 1 saved, 2 others
    statusMessage: string; // error or success message from server
    rowCount: number; // number of rows returned
    data: any; // actual data
  }

  export class DBOutBoundData {
    // errorCode : 0;
    // errorMessage : "AngularUI";
    // rowCount : 1;
    // recordType: string;
    // data: any;
    // error: boolean;
    // statusCode: number;
    // statusMessage: string;
    rowCount : number;
    recordType: string;
    data: any;
  }