import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbsListComponent } from './herbs-list.component';

describe('HerbsListComponent', () => {
  let component: HerbsListComponent;
  let fixture: ComponentFixture<HerbsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
