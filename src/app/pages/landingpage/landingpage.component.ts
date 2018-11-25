import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  upload: boolean = false;
  loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onLoad() {
    this.loading = !this.loading;
    console.log("loading: " + this.loading);
  }

  onUpload() {
    this.upload = true;
    console.log("upload: " + this.upload);
  }
}
