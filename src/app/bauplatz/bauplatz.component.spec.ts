import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BauplatzComponent } from './bauplatz.component';

describe('BauplatzComponent', () => {
  let component: BauplatzComponent;
  let fixture: ComponentFixture<BauplatzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BauplatzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BauplatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
