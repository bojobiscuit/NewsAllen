import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  
  message: string;
  status: string;

  constructor(public nav: NavService) { }

  ngOnInit() { 
    this.status = this.nav.submitType;
    this.message = this.nav.submitMessage;
    this.nav.submitType = null;
    this.nav.submitMessage = null;
  }

}
