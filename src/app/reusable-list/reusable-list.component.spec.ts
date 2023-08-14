import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableListComponent } from './reusable-list.component';

describe('ReusableListComponent', () => {
  let component: ReusableListComponent;
  let fixture: ComponentFixture<ReusableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableListComponent]
    });
    fixture = TestBed.createComponent(ReusableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
