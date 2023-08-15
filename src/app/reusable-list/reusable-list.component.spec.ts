import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { ReusableListComponent } from './reusable-list.component';

describe('ReusableListComponent', () => {
  let component: ReusableListComponent;
  let fixture: ComponentFixture<ReusableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableListComponent],
      imports: [ReactiveFormsModule], // Add ReactiveFormsModule here
    });
    fixture = TestBed.createComponent(ReusableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
