import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FakeStatsButtonComponent } from './fake-stats-button/fake-stats-button';
import { AttributionComponent } from './attribution/attribution.component';


@NgModule({
  declarations: [FakeStatsButtonComponent, AttributionComponent],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
  ],
  exports: [
    FakeStatsButtonComponent,
    AttributionComponent
  ]
})
export class SharedModule { }
