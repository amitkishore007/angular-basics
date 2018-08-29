import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { FormsModule } from '@angular/forms';
import { MycustomComponent } from './mycustom/mycustom.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    MycustomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
