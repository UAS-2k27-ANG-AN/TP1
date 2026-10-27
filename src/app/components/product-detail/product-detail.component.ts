import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnChanges {
  @Input() product: Product | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      console.info(`[ProductDetail] Détails affichés : ${this.product.name}`);
    }
  }
}

export { ProductDetailComponent as ProductDetail };
