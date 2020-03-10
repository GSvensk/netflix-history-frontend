import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FakeStatsButtonComponent } from './fake-stats-button/fake-stats-button';


@NgModule({
  declarations: [FakeStatsButtonComponent],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
  ],
  exports: [
    FakeStatsButtonComponent
  ]
})
export class SharedModule { }
