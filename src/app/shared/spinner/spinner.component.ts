import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  titlesConsumed: number;

  constructor(private state: StateService) {
    this.state.titles.subscribe(noOfTitles => this.titlesConsumed = noOfTitles);
  }

  ngOnInit() {
  }
}
