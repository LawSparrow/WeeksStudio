import { Component } from '@angular/core';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavContainer, MatSidenavModule, MatToolbar, MatListItem, MatNavList, RouterOutlet, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  items = [
    { name: 'Home', link: '/home'},
  ]
}