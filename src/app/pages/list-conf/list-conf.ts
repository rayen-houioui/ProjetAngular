import { Component } from '@angular/core';
import { Conference } from '../../model/Conference';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-conf',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  list: Conference[];
  searchTitle: string = '';
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
}
