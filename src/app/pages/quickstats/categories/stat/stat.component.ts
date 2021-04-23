import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  @Input() number: number;
  @Input() name: string;
  @Input() unit?: string;

  constructor() { }

  ngOnInit() {
  }

}
