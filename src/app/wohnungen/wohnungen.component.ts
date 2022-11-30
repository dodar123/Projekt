import { Component, OnInit } from '@angular/core';
import { WohnungenNEU } from '../hauser';
@Component({
  selector: 'app-wohnungen',
  templateUrl: './wohnungen.component.html',
  styleUrls: ['./wohnungen.component.css']
})
export class WohnungenComponent implements OnInit {

  constructor() { }

  bild1:string = 'assets/Images/Wohnungen/Wohnung1.jpg';
  bild2:string = 'assets/Images/Wohnungen/Wohnung2.jpg';
  bild3:string = 'assets/Images/Wohnungen/Wohnung3.jpg';
  bild4:string = 'assets/Images/Wohnungen/Wohnung4.jpg';
  hausers = WohnungenNEU;

  ngOnInit(): void {
  }

}
