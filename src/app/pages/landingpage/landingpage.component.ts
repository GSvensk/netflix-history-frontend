import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  upload: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onUpload() {
    this.upload = true;
  }

}
