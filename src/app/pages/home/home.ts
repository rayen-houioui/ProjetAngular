import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';
import { Conference } from '../../model/Conference';
import { FormsModule } from '@angular/forms';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  list: Conference[];
  searchTitle: string ='';
  ngOnInit() {
    this.list = [
      {
        title: 'angular',
        description: 'description de conference ',
        date: '0/00/0000',
        nbrMax: 51,
        nbrReservation: 50,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwG7wcZ0C3wD5pqSvtTuBn9USYb3YHdtXsegeI4cOr6g&s=10',
      },
      {
        title: 'react',
        description: 'description de conference ',
        date: '0/00/0000',
        nbrMax: 51,
        nbrReservation: 50,
        picture: '',
      },
    ];
  }
  participate(conf: Conference): void {
    conf.nbrReservation++;
  }

  protected readonly Conference = Conference;
}
