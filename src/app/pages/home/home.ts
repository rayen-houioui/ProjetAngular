import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';
import { Conference } from '../../model/Conference';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  list: Conference[]
  ngOnInit() {
    this.list = [
      {
        title: 'conference1',
        description: 'description',
        date: 'date',
        nbrMax: 51,
        nbrReservation: 50,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwG7wcZ0C3wD5pqSvtTuBn9USYb3YHdtXsegeI4cOr6g&s=10',
      }




    ]
  }
  participate(conf:Conference): void {
    conf.nbrReservation++;
  }

  protected readonly Conference = Conference;
}
