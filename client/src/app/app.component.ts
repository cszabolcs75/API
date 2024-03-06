import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CoreModule, ShopModule, ]
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  
  constructor() {}

  ngOnInit(): void {
  }
}
