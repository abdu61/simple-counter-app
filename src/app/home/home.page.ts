import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}   

  public count = 0;

  TapMe(){
    this.count++;
  }

  reset(){
    this.count = 0;
  }


}
