import { BasketService } from './../../basket/basket.service';
import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  providers: [CurrencyPipe]
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor(private basketService: BasketService){}

  addItemToBasket() {
    this.product && this.basketService.addItemToBasket(this.product);
  }
}
