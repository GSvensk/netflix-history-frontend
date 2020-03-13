import { Component, OnInit} from "@angular/core";
import { ParseService } from "../../services/parse/parse.service";
import { ScrollService } from "src/app/shared/scroller/scroll.service";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"]
})
export class UploadComponent implements OnInit {
  titlesConsumed: number;
  loading: boolean = false;

  constructor(
    private parseService: ParseService,
    private scroller: ScrollService
  ) { }

  ngOnInit() { }

  uploadFile($event) {
    //console.log($event.target.files[0]); // outputs the first file
    this.scroller.triggerScrollTo();
    this.parseService.parse($event);
  }
}
