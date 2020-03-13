import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { GatewayService } from './gateway/gateway.service';
import { ParseService } from './parse/parse.service';
import { FormatService } from './format/format.service';
import { StateService } from './state/state.service';

@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SpinnerComponent,
  ],
  providers: [
    GatewayService,
    StateService,
    ParseService
  ]
})
export class ServiceModule { }
