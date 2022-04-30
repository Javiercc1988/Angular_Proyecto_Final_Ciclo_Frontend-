import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSectionBannerComponent } from './top-section-banner.component';

describe('TopSectionBannerComponent', () => {
  let component: TopSectionBannerComponent;
  let fixture: ComponentFixture<TopSectionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSectionBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSectionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
