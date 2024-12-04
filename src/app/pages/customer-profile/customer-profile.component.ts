import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer-profile',
  imports: [FormsModule,CommonModule],
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent {

  customer = {
    customerID: '',
    name: '',
    contact: '',
    city: ''

  };

  constructor(private http: HttpClient) {}

  onUpdate() {
    const inputElement = document.getElementById('customerID') as HTMLInputElement;
    const id = inputElement.value;
    const searchLong = Number(id);
  
    if (isNaN(searchLong)) {
      console.error('Invalid customerID');
      return;
    }
  

    fetch(`http://localhost:8080/updateCustomer/id?id=${encodeURIComponent(searchLong)}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.customer),
    })
      .then(response => response.json())
      .then(data => {
        alert("customer updated successfully!");
        console.log('customer updated successfully!', data);
      })

  }
  



  getCustomerBySearch() {
    const inputElement = document.getElementById('searchInput') as HTMLInputElement;
    const search = inputElement.value; 
  
  
    const searchLong = Number(search); 
  
    if (!isNaN(searchLong)) {
      const url = `http://localhost:8080/searchCustomer/id?id=${encodeURIComponent(searchLong)}`;
      
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          this.customer = data; 
          console.log('Data fetched successfully:', data);
        }).catch((error) => {
          alert("customer not found!");
        })
       
    } 
  }
  


  deleteStudent() {
    const inputElement = document.getElementById('customerID') as HTMLInputElement;
    const search = inputElement.value;
  
    const searchLong = Number(search);
  
    if (!isNaN(searchLong)) {
      const url = `http://localhost:8080/deleteCustomer/id?id=${encodeURIComponent(searchLong)}`;
  
      fetch(url, {
        method: 'DELETE',  // Use DELETE method
      })
        .then(response =>response.json()) 
        .then((data) => {
          alert("Customer deleted successfully!");
          console.log('Delete successfully:', data);
        })

    } 
 
  }

}
