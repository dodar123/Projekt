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

@NgModule({
  declarations: [
    AppComponent,
    HauserNEUComponent,
    WohnungenComponent,
    BauplatzComponent,
    CreateComponent,
    UebersichtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
