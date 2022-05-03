import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardsComponent } from './team-cards.component';

describe('TeamCardsComponent', () => {
  let component: TeamCardsComponent;
  let fixture: ComponentFixture<TeamCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
