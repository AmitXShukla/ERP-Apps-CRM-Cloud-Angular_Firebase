import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-simpleheader',
  templateUrl: './simpleheader.component.html',
  styleUrls: ['./simpleheader.component.css']
})
export class SimpleheaderComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() pageTitle: string;
  @Input() helpType: string;
  configData;

  constructor(private _backendService: BackendService) { }

  ngOnInit(): void {
    this.configData = this._backendService.getConfig("helptext");
  }

}
