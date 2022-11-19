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
  myUpload = true;
  errorMessage = "";
  production: boolean = environment !== undefined ? environment.production : false;
  id: string;

  constructor(private state: StateService, private route: ActivatedRoute, private gateway: GatewayService) { }

  ngOnInit() {
    this.state.hasUpload.subscribe(upload => this.upload = upload);
    this.state.isLoading.subscribe(loading => this.loading = loading);
    this.state.errorMessage.subscribe(errorMessage => this.errorMessage = errorMessage);
    const selectedId = this.route.snapshot.queryParams['id'];
    if (selectedId != null) {
      this.myUpload = false;
      this.state.load();
      this.gateway.get(selectedId);
    }
    this.gateway.stats.subscribe(stat => {this.id = stat != null ? stat.id : null})
  }

  goToStart(){
    window.location.href='https://www.mynetflixhistory.com/';
  }

  async copyMessage(){
    const shareData = {
      title: 'mynetflixhistory.com',
      text: 'Check out your netflix history!',
      url: environment.apiUrl + "/analysis?id=" + this.id
    }

    let navigator: any;

    navigator = window.navigator;

    if (navigator && navigator.canShare && navigator.canShare(shareData)) {
      console.log("canShare");
      await navigator.share(shareData);
    } else {
      console.log("copied");
      this.copyLink();
    }
  }

  copyLink() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = environment.apiUrl + "/analysis?id=" + this.id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
