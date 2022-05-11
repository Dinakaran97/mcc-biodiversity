import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterfliesListComponent } from './butterflies-list.component';

describe('ButterfliesListComponent', () => {
  let component: ButterfliesListComponent;
  let fixture: ComponentFixture<ButterfliesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButterfliesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterfliesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
