import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HauserNEUComponent} from './hauser/hauser.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { WohnungenComponent } from './wohnungen/wohnungen.component';
import { BauplatzComponent } from './bauplatz/bauplatz.component';
import { CreateComponent } from './create/create.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { ShowComponent } from './show/show.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HauserNEUComponent,
    WohnungenComponent,
    BauplatzComponent,
    CreateComponent,
    UebersichtComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
