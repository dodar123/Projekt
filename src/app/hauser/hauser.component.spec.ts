import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauserNEUComponent } from './hauser.component';

describe('HauserNEUComponent', () => {
  let component: HauserNEUComponent;
  let fixture: ComponentFixture<HauserNEUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauserNEUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauserNEUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
