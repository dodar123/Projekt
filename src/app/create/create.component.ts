import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HauserNEU } from '../hauser';
import { Hauser } from '../häuser';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { ProjektService } from '../Services/projekt.service';
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
    


      getHouseFromData(data:any)
      {
        console.warn(data)
        this.userData.saveUser(data).subscribe((result) =>{
          console.warn(result)
        })
      }
      
    
  haeuser: Hauser = {
    id: this.UserId,
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
