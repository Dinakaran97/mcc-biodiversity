import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptilesComponent } from './reptiles.component';

describe('ReptilesComponent', () => {
  let component: ReptilesComponent;
  let fixture: ComponentFixture<ReptilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReptilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
