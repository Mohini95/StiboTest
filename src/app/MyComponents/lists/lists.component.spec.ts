/* Angular cli
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsComponent } from './lists.component';

describe('ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsComponent]
    });
    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should filter items', () => {
    component.items = [
      { name: 'Item A' },
      { name: 'Item B' },
      // ... other items
    ];
    component.filterItems('Item A');
    expect(component.displayedItems.length).toBe(1);
    expect(component.displayedItems[0].name).toBe('Item A');
  });

});
*/