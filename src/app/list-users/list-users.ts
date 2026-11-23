import { Component } from '@angular/core';
import{User} from '../model/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  imports: [FormsModule],
  templateUrl: './list-users.html',
  styleUrl: './list-users.css',
})
export class ListUsers {
  list: User[];
  searchName: string = '';

  ngOnInit() {
    this.list = [
      {
        nom: 'Sami',
        prenom: 'vvvv',
        mail: '',
      },
      {
        nom: 'Smmm',
        prenom: 'aaa',
        mail: '',
      },
      {
        nom: 'Amir',
        prenom: 'cccc',
        mail: '',
      },
    ];
  }
}
