import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  upload = false;
  loading = false;
  failed = false;
  production: boolean = environment !== undefined ? environment.production : false;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.hasUpload.subscribe(upload => this.upload = upload);
    this.state.isLoading.subscribe(loading => this.loading = loading);
    this.state.hasFailed.subscribe(failed => this.failed = failed);
  }
}
