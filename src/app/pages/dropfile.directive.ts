import { Directive, HostListener } from '@angular/core';
import { ParseService } from 'src/app/services/parse/parse.service';
import { ScrollService } from 'src/app/shared/scroller/scroll.service';


@Directive({
  selector: '[appDropfile]'
})
export class DropfileDirective {

  // Disable dropping on the body of the document. 
  // This prevents the browser from loading the dropped files
  // using it's default behaviour if the user misses the drop zone.
  // Set this input to false if you want the browser default behaviour.
  preventBodyDrop = true;

  constructor(
    private parseService: ParseService,
    private scroller: ScrollService
  ) { }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.scroller.triggerScrollTo();
    this.parseService.parse(event.dataTransfer.files[0]);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
  }

  @HostListener('body:dragover', ['$event'])
  onBodyDragOver(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @HostListener('body:drop', ['$event'])
  onBodyDrop(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
    }
  }
}
