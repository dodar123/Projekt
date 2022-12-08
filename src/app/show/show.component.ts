import { Component, OnInit } from '@angular/core';
import { HauserNEU } from '../hauser';
import { Router, ActivatedRoute } from '@angular/router';
import { HauserNEUComponent } from '../hauser/hauser.component';
import { Hauser } from '../häuser';
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

  hausers: Hauser = {
      id: uuidv4(),
      Kaufpreis: 12345.00,
      Bezeichnung: "Schönes Haus, in einer Wohlfühlarea, welche Sie noch nie gesehen haben",
      Baujahr: 1952,
      Garagenstellplatz: true,
      Etagen: 4,
      Wohnfläche: 234
  }

  ngOnInit(): void {
  }
}
