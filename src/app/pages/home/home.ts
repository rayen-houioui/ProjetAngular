import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //attributs
  title: string;
  btnstate:boolean;
  // constructors
  constructor() {
    this.title = 'homeee';
    this.btnstate=false;
  }
  //methodes
  change():void {
    this.title='99999999'
    this.btnstate=true

  }


}
