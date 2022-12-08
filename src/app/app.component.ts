import { Component } from '@angular/core';
import { ProjektService } from './projekt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Immobilien';
  TitleHaus = 'Häuser';
  TitleWohnung= 'Wohnungen';
  TitleBauplatz= 'Bauplätze';

  users:any;
  constructor(private hausData: ProjektService) {
    this.hausData.users().subscribe((data) => {
      this.users = data;
    });
}

  }
  




