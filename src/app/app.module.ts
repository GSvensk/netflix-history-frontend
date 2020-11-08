import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { PapaParseModule } from 'ngx-papaparse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { GatewayService } from './services/gateway/gateway.service';
import { PagesModule } from './pages/pages.module';
import { EnvServiceProvider } from './env.service.provider';



@NgModule({
  declarations: [
    AppComponent,
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
  providers: [GatewayService,EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
