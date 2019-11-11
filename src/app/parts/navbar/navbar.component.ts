import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'parts-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  hideExpand() {
    this.isExpanded = false;
  }

}
