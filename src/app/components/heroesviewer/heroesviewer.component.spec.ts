import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesviewerComponent } from './heroesviewer.component';

describe('HeroesviewerComponent', () => {
  let component: HeroesviewerComponent;
  let fixture: ComponentFixture<HeroesviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
