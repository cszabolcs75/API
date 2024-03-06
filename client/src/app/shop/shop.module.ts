import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopService } from './shop.service';
import { ProductItemComponent } from "./product-item/product-item.component";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ShopComponent,
        ProductItemComponent,
    ],
    providers: [
        ShopService
    ],
    exports: [
        ShopComponent,
        ProductItemComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule
    ]
})
export class ShopModule { }
