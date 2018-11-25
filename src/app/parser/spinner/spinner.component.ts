import { Component, OnInit } from '@angular/core';
import { BackendClientService } from '../backend-client.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  titlesConsumed: number;

  constructor(private backendClient: BackendClientService) {
    this.backendClient.titlesWatched.subscribe(titles => {
      this.titlesConsumed = titles;
    })
   }

  ngOnInit() {
  }

}
