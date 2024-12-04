
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
})
export class RegisterComponent {
  customer = {
    name: '',
    contact: '',
    city: '',

  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    fetch('http://localhost:8080/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.customer),
    })
      .then(response => response.json())
      .then(data => {
        alert("customer registered successfully!");
        console.log('customer registered successfully!', data);
      })
     
  }
}
