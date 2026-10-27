import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product!: Product;
  @Input() isSelected = false;
  @Output() productSelected = new EventEmitter<Product>();

  ngOnInit(): void {
    console.info('[ProductItem] Composant initialisé');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      console.info(`[ProductItem] Produit reçu : ${this.product.name}`);
    }
  }

  ngOnDestroy(): void {
    console.info('[ProductItem] Composant détruit');
  }

  onSelect(): void {
    this.productSelected.emit(this.product);
  }
}

export { ProductItemComponent as ProductItem };
