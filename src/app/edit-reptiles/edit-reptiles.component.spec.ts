import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReptilesComponent } from './edit-reptiles.component';

describe('EditReptilesComponent', () => {
  let component: EditReptilesComponent;
  let fixture: ComponentFixture<EditReptilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReptilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReptilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
