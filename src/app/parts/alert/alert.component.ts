import { Component, OnInit, Input } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  @Input() status: string;

  constructor(public nav: NavService) { }

  ngOnInit() {
    if (this.nav.submitStatus) {
      this.status = this.nav.submitStatus;
      this.message = this.nav.submitMessage;
      this.nav.submitStatus = null;
      this.nav.submitMessage = null;
    }
  }

  isError() {
    return this.status == "error" || this.status == 'Error';
  }

  getAlertClass() {
    if (this.isError()) {
      return "error";
    }
    if (this.status.length > 0) {
      return "success";
    }
  }

}
