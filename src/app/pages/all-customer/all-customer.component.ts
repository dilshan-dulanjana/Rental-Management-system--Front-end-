import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-customer',
  imports: [CommonModule],
  templateUrl: './all-customer.component.html',
  styleUrl: './all-customer.component.css'
})
export class AllCustomerComponent implements OnInit{
  customers: any[] = []; 

  constructor(private http: HttpClient) {}

 
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.http.get<any[]>('http://localhost:8080/getAllCustomers') 
      .subscribe(
        (data) => {
          this.customers = data;
          console.log('Data fetched successfully:', data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}
