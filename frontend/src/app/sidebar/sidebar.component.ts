import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  checkRoute() {
    setTimeout(() => {
      this.currentRoute = this.router.url;
    }, 50);
  }

  ngOnInit(): void {
    this.checkRoute();
  }
}
