import { Component, OnInit, Input } from '@angular/core';
import { BackendClientService } from '../backend-client.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input('titles') titlesConsumed: number;

  constructor() {
  }

  ngOnInit() {
  }
}
