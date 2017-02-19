import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AcompComponent } from './comp/acomp/acomp.component';
import { BcompComponent } from './comp/bcomp/bcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    AcompComponent,
    BcompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
