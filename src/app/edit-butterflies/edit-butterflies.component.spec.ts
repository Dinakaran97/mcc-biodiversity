import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButterfliesComponent } from './edit-butterflies.component';

describe('EditButterfliesComponent', () => {
  let component: EditButterfliesComponent;
  let fixture: ComponentFixture<EditButterfliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditButterfliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButterfliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
