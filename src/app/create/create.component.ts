import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Objekt } from '../häuser';
import { HauserNEU } from '../hauser';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { ProjektService } from '../Services/projekt.service';
import { HauserNEUComponent } from '../hauser/hauser.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  selectedFile = null ;
  users: any;
  UserId = uuidv4();
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private http: HttpClient,
      private userData:ProjektService) {
        this.userData.users().subscribe((data) => {
          this.users = data;
        });
        
       }
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
    


      getHouseFromData(data:any)
      {
        console.warn(data)
        this.userData.saveUser(data).subscribe((result) =>{
          console.warn(result)
        })
      }
      
    
	  objekt = HauserNEU;
	  "id": String;
	  "Bezeichnung": String;
	  "PLZ": Number;
	  "Stadt":String;
	  "Baujahr": Number;
	  "Garagenstellplatz": Boolean;
	  "Etagen": Number;
	  "Wohnfläche": Number;
	  "Erstelltam": Date;
	  //"Erstelltvon": Text,
	  "Firma":String;
	  "Preis": Number;
	  "Nebenkosten": Number;
	  "Typ": String;
	  "Energieklasse": String;
	  "Heizung": String;
	  "Beschreibung": String;
	  "Bezugsfrei": Date;
}
 




function ngOnInit() {
	throw new Error('Function not implemented.');
}

