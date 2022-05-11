import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterfliesComponent } from './butterflies.component';

describe('ButterfliesComponent', () => {
  let component: ButterfliesComponent;
  let fixture: ComponentFixture<ButterfliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButterfliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterfliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
