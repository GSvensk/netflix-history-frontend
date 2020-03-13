import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GatewayService } from '../../services/gateway/gateway.service';
import { StateService } from 'src/app/services/state/state.service';


@Component({
  selector: 'app-fake-stats-button',
  templateUrl: './fake-stats-button.component.html'
})
export class FakeStatsButtonComponent implements OnInit {

  constructor(private backendClient: GatewayService, private state: StateService) { }

  ngOnInit() {
  }

  onClickMe() {
    console.log("clicked");
    this.backendClient.readFakeResults()
    this.state.upload();
  }
}
