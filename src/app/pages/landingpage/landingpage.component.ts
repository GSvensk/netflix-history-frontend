import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  upload: boolean = false;
  loading: boolean = false;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.hasUpload.subscribe(upload => this.upload = upload);
    this.state.isLoading.subscribe(loading => this.loading = loading);
  }
}
