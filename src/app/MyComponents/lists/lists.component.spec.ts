import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ListsComponent } from './lists.component';

describe('ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListsComponent],
      imports: [ReactiveFormsModule], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter items correctly for countries', () => {
    // Set up test data
    const countries = [
      { name: 'Norway', code: 'No' },
      { name: 'China', code: 'CN' },
    ];
    component.itemType = 'countries';
    component.items = countries;
    component.ngOnInit();

    const searchValue = 'Norway';
    component.searchControl.setValue(searchValue);
    fixture.detectChanges();

    expect(component.displayedItems.length).toBe(1);
    expect(component.displayedItems[0].name).toBe('Norway');
  });

});
