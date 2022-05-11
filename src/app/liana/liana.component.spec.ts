import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LianaComponent } from './liana.component';

describe('LianaComponent', () => {
  let component: LianaComponent;
  let fixture: ComponentFixture<LianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LianaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
