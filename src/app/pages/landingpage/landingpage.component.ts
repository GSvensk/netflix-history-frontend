import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';
import { environment } from '../../../environments/environment';
import { GatewayService } from 'src/app/services/gateway/gateway.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  upload = false;
  loading = false;
  errorMessage = "";
  production: boolean = environment !== undefined ? environment.production : false;

  constructor(private state: StateService, private route: ActivatedRoute, private gateway: GatewayService) { }

  ngOnInit() {
    this.state.hasUpload.subscribe(upload => this.upload = upload);
    this.state.isLoading.subscribe(loading => this.loading = loading);
    this.state.errorMessage.subscribe(errorMessage => this.errorMessage = errorMessage);
    const selectedId = this.route.snapshot.queryParams['id'];
    if (selectedId != null) {
      this.state.load();
      this.gateway.get(selectedId);
    }
  }
}
