import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  upload: boolean = false;
  loading: boolean = false;
  titles: number;

  constructor() { }

  ngOnInit() {
  }

  onLoad(length) {
    this.titles = length;
    this.loading = !this.loading;
  }

  onUpload() {
    this.upload = true;
  }
}
