import { Component, OnInit } from '@angular/core';
import { HauserNEU } from '../hauser';
import { Router, ActivatedRoute } from '@angular/router';
import { HauserNEUComponent } from '../hauser/hauser.component';
import { Objekt } from '../häuser';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  bild1:string = 'assets/Images/Häuser/Haus1.jpg';
  bild2:string = 'assets/Images/Häuser/Haus2.jpg';
  bild3:string = 'assets/Images/Häuser/Haus3.jpg';
  bild4:string = 'assets/Images/Häuser/Haus4.jpg';

  objekt: Objekt = {
	  id: uuidv4(),
	  Bezeichnung: 'test',
	  Adresse: "ijuhzgtzui",
	  Baujahr: 1952,
	  Garagenstellplatz: true,
	  Etagen: 4,
	  Wohnfläche: 234,
	  Erstelltam: new Date(),
	  Firma: 'Test',
	  Preis: 123456,
	  Nebenkosten: 485967,
	  Typ: 'Wohnung',
	  PLZ: 789456,
	  Stadt: 'Bielefeld',
	  Energieklasse: 'AA',
	  Heizung: 'Pellets',
	  Beschreibung: 'Schönes Haus, in einer Wohlfühlarea, welche Sie noch nie gesehen haben',
	  Bezugsfrei: new Date(),
  }

  ngOnInit(): void {
  }
}
