import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHerbsComponent } from './edit-herbs.component';

describe('EditHerbsComponent', () => {
  let component: EditHerbsComponent;
  let fixture: ComponentFixture<EditHerbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHerbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
