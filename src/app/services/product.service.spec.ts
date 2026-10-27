import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('returns the product catalogue', () => {
    expect(service.getProducts()).toHaveLength(4);
    expect(service.getProducts()[0].name).toBe('Ordinateur portable');
  });

  it('searches product names without regard to case', () => {
    expect(service.searchProducts('SMART')).toEqual([
      expect.objectContaining({ name: 'Smartphone' })
    ]);
  });

  it('returns the whole catalogue for an empty search', () => {
    expect(service.searchProducts('')).toHaveLength(4);
  });

  it('returns no products when the search has no matches', () => {
    expect(service.searchProducts('inexistant')).toEqual([]);
  });
});
