import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HauserNEU } from '../hauser';
import { Hauser } from '../häuser';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  haeuser: Hauser = {
    id: 12345,
    Kaufpreis: 145.000,
    Bezeichnung: "Wie beschriebn Sie Ihr Haus?",
    Baujahr: 1995,
    Garagenstellplatz: true,
    Etagen: 3,
    Wohnfläche: 187,
  }






  ngOnInit(): void {
  }

}
