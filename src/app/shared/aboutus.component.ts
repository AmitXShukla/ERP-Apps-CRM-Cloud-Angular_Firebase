import { Component, OnInit } from '@angular/core';
import { BackendService} from '../services/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private _backendService: BackendService) { }

  ngOnInit(): void {

  }
}
