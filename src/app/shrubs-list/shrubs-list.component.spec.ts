import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrubsListComponent } from './shrubs-list.component';

describe('ShrubsListComponent', () => {
  let component: ShrubsListComponent;
  let fixture: ComponentFixture<ShrubsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShrubsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrubsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
