import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBirdsComponent } from './edit-birds.component';

describe('EditBirdsComponent', () => {
  let component: EditBirdsComponent;
  let fixture: ComponentFixture<EditBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
