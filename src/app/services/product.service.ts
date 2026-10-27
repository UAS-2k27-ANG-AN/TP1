import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Ordinateur portable', price: 2500, description: 'Un compagnon puissant pour le travail et les loisirs.' },
    { id: 2, name: 'Smartphone', price: 1200, description: 'Un téléphone de dernière génération, simple à utiliser.' },
    { id: 3, name: 'Casque audio', price: 150, description: 'Un casque sans fil pour écouter vos morceaux préférés.' },
    { id: 4, name: 'Clavier mécanique', price: 80, description: 'Un clavier précis et confortable au quotidien.' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  searchProducts(term: string): Product[] {
    return this.products.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));
  }
}
