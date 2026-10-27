import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appConfig } from '../../app.config';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: appConfig.providers
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    fixture.detectChanges();
  });

  it('displays all products in the catalogue', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-product-item');

    expect(cards.length).toBe(4);
  });

  it('filters products as the user types', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input[type="search"]');
    input.value = 'casque';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-product-item').length).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Casque audio');
  });

  it('shows an empty state when the search has no results', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input[type="search"]');
    input.value = 'inexistant';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[role="status"]')).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Aucun produit trouvé');
  });

  it('shows product details after a product is selected', () => {
    const card: HTMLButtonElement =
      fixture.nativeElement.querySelector('app-product-item button');
    card.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-product-detail').textContent)
      .toContain('Ordinateur portable');
  });
});
