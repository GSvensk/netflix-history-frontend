import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { ParseService } from '../../services/parse/parse.service';
import { ScrollService } from 'src/app/shared/scroller/scroll.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  titlesConsumed: number;
  loading = false;

  @ViewChild("upload") fileDropEl: ElementRef;

  constructor(
    private parseService: ParseService,
    private scroller: ScrollService
  ) { }

  ngOnInit() { }

  uploadFile($event) {
    this.scroller.triggerScrollTo();
    this.parseService.parse($event);
  }

   onFileDropped($event) {
    this.scroller.triggerScrollTo();
    this.parseService.parse($event);
  }
}
