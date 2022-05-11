import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLainaComponent } from './edit-laina.component';

describe('EditLainaComponent', () => {
  let component: EditLainaComponent;
  let fixture: ComponentFixture<EditLainaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLainaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLainaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
