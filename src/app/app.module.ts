import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IframeContainerComponent } from './iframe-container/iframe-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IframeContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
