import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HauserNEUComponent } from './hauser/hauser.component';
import { WohnungenComponent } from './wohnungen/wohnungen.component';
import { BauplatzComponent } from './bauplatz/bauplatz.component';
import { CreateComponent } from './create/create.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
    {
        path:'Häuser', component:HauserNEUComponent
    },
    {
        path:'Wohnungen', component:WohnungenComponent
    },
    {
        path:'Bauplatz', component:BauplatzComponent
    },
    {
        path:'create', component:CreateComponent
    },
    {
        path:'home', component:UebersichtComponent
    },
    {
        path:'show/:id', component:ShowComponent
    },
    {
        path:'', redirectTo:'home', pathMatch:'full'
    }
]




@NgModule({
  
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }