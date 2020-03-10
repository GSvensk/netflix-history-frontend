import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendClientService } from '../../parser/backend-client.service';


@Component({
  selector: 'app-fake-stats-button',
  templateUrl: './fake-stats-button.component.html'
})
export class FakeStatsButtonComponent implements OnInit {

  @Output() upload: EventEmitter<any> = new EventEmitter();

  constructor(private backendClient: BackendClientService) { }

  ngOnInit() {
  }

  onClickMe() {
    console.log("clicked");
    this.backendClient.readFakeResults()
    this.upload.emit(null);
  }
}
