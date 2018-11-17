import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UploadComponent } from './upload/upload.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  //{ path: 'FAQ', component: HeroDetailComponent }
]


@NgModule({
  declarations: [
    LandingpageComponent,
    UploadComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    ),
    ChartsModule,
    MatButtonModule
  ],
   exports: [
     LandingpageComponent
   ]
})
export class PagesModule { }
