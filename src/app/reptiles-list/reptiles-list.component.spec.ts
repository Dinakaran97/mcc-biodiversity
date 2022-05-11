import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptilesListComponent } from './reptiles-list.component';

describe('ReptilesListComponent', () => {
  let component: ReptilesListComponent;
  let fixture: ComponentFixture<ReptilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReptilesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
