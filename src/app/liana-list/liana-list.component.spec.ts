import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LianaListComponent } from './liana-list.component';

describe('LianaListComponent', () => {
  let component: LianaListComponent;
  let fixture: ComponentFixture<LianaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LianaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LianaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
