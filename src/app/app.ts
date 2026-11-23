import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './sharedComponents/footer/footer';
import { Header } from './sharedComponents/header/header';
import { Home } from './pages/home/home';
import { ListConf } from './pages/list-conf/list-conf';
import { ListUsers } from './list-users/list-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, ListConf, ListUsers],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontendProject');
}
