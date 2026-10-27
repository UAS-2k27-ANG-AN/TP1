import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, ProductItemComponent, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  private productService = inject(ProductService);

  products: Product[] = this.productService.getProducts();
  searchTerm = '';
  selectedProduct: Product | null = null;

  get filteredProducts(): Product[] {
    return this.productService.searchProducts(this.searchTerm);
  }

  onProductSelected(product: Product): void {
    this.selectedProduct = product;
  }
}

export { ProductListComponent as ProductList };
