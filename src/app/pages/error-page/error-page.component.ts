import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  @Input() message: string;

  ngOnInit() {
  }

  reload() {
    window.location.href=window.location.origin
  }
}
