import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  submitStatus: string;
  submitMessage: string;

  constructor(public title: Title, public router: Router) {
    this.resetTitle();
  }

  navigateWithError(path: string, ...params: any[]) {
    this.submitStatus = "error";
    this.submitMessage = "The request had an error. :/";
    this.nav(path, params);
  }

  navigateWithMessage(subType: string, subMsg: string, path: string, ...params: any[]) {
    this.submitStatus = subType;
    this.submitMessage = subMsg;
    this.nav(path, params);
  }

  navigate(path: string, ...params: any[]) {
    this.nav(path, params);
  }

  nav(path: string, params: any[]) {
    var args = [path];
    params.forEach(element => {
      if (element)
        args.push(element);
    });
    console.log(args);
    this.router.navigate(args);
  }

  resetTitle() {
    this.title.setTitle("NAH: News Allen Hamilton");
  }

  setTitle(name: string) {
    this.title.setTitle("NAH - " + name);
  }
}
