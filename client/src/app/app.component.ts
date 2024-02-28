import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavBarComponent, CommonModule, HttpClientModule]
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: response => this.products=response.data,
      error: error => console.log(error),
      complete: () =>{
        console.log('request completed');
      }
    })
  }
}
