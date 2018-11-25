import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  @Output() upload: EventEmitter<any> = new EventEmitter();
  @Output() load: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onUpload() {
    this.upload.emit(null);
  }

  onLoad() {
    this.load.emit(null);
  }
}
