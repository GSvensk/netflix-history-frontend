import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UploadComponent } from './upload/upload.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { StatisticsComponent } from './statistics/statistics.component';
import { InformationComponent } from './information/information.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ParseModule } from '../parser/parse.module';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  //{ path: 'FAQ', component: HeroDetailComponent }
]


@NgModule({
  declarations: [
    LandingpageComponent,
    UploadComponent,
    ChartComponent,
    StatisticsComponent,
    InformationComponent,
    InstructionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    ),
    ChartsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    ParseModule
  ],
  exports: [
    LandingpageComponent
  ]
})
export class PagesModule { }
