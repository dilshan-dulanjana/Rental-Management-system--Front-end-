import { Component } from '@angular/core';
import { HeaderComponent } from './pages/header/header.component';


@Component({
  selector: 'app-root',
  imports: [ HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
}