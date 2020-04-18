export class DBInBoundData {
error: boolean;
    statusCode: number; // 0 initial, 1 saved, 2 others
    statusMessage: string; // error or success message from server
    rowCount: number; // number of rows returned
    data: any; // actual data
  }

  export class DBOutBoundData {
    rowCount : number;
    recordType: string;
    data: any;
  }