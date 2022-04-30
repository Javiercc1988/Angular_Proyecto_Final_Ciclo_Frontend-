import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProdSliderComponent } from './cat-prod-slider.component';

describe('CatProdSliderComponent', () => {
  let component: CatProdSliderComponent;
  let fixture: ComponentFixture<CatProdSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatProdSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatProdSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
