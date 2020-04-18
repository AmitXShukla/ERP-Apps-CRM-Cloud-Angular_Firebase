import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  configData;

  constructor(private _backendService: BackendService) { }

  ngOnInit(): void {
    this.configData = this._backendService.getConfig("social");
  }

}
