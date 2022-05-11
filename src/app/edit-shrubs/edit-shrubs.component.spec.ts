import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShrubsComponent } from './edit-shrubs.component';

describe('EditShrubsComponent', () => {
  let component: EditShrubsComponent;
  let fixture: ComponentFixture<EditShrubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShrubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShrubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
