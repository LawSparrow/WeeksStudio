import { Component, signal } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { TopHeader } from './top-header/top-header';

@Component({
  selector: 'app-root',
  imports: [Sidebar, TopHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WeeksStudio');
}
