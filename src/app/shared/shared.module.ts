import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FakeStatsButtonComponent } from './fake-stats-button/fake-stats-button';
import { AttributionComponent } from './attribution/attribution.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';


@NgModule({
  declarations: [FakeStatsButtonComponent, AttributionComponent, DisclaimerComponent],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
  ],
  exports: [
    FakeStatsButtonComponent,
    AttributionComponent,
    DisclaimerComponent
  ]
})
export class SharedModule { }
