// src/app/pages/header/header.component.ts
import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';

@Component({
  
  selector: 'app-header',
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
