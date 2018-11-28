import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
  ]
})
export class SharedModule { }
