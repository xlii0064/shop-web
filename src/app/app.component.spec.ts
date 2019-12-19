import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ProductItemComponent} from './product/product-item/product-item.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductItemComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe(' The largest shopping website EVER!! ');
    expect(compiled.querySelector('h3').textContent).toBe('This is THE SHOP')
  });
});
