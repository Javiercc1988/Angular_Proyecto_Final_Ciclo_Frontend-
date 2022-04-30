import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImageButtonComponent } from './info-image-button.component';

describe('InfoImageButtonComponent', () => {
  let component: InfoImageButtonComponent;
  let fixture: ComponentFixture<InfoImageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoImageButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
