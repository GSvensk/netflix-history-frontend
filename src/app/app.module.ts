import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PapaParseModule } from 'ngx-papaparse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {BackendClientService} from './parser/backend-client.service';
import { TmdbClientService } from './tmdbrequests/tmdb-client.service';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PapaParseModule,
    HttpClientModule,
    PagesModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [TmdbClientService, BackendClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
