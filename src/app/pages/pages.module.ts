import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UploadComponent } from './upload/upload.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './charts/chart.component';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { InformationComponent } from './information/information.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ServiceModule } from '../services/service.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { GeneralComponent } from './quickstats/categories/general/general.component';
import { StatComponent } from './quickstats/categories/stat/stat.component';
import { MoviesComponent } from './quickstats/categories/movies/movies.component';
import { SeriesComponent } from './quickstats/categories/series/series.component';
import { QuickstatsComponent } from './quickstats/quickstats.component';
import { LinechartComponent } from './charts/linechart/linechart.component';
import { BarchartComponent } from './charts/barchart/barchart.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  //{ path: 'FAQ', component: HeroDetailComponent }
]


@NgModule({
  declarations: [
    LandingpageComponent,
    UploadComponent,
    ChartComponent,
    InformationComponent,
    InstructionsComponent,
    GeneralComponent,
    StatComponent,
    MoviesComponent,
    SeriesComponent,
    QuickstatsComponent,
    LinechartComponent,
    BarchartComponent
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
    ServiceModule,
    MatTooltipModule,
    SharedModule
  ],
  exports: [
    LandingpageComponent
  ]
})
export class PagesModule { }
