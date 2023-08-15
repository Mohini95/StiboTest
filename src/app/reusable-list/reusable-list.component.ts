import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reusable-list',
  templateUrl: './reusable-list.component.html',
  styleUrls: ['./reusable-list.component.css']
})

export class ReusableListComponent {
  @Input() items: any[] = [];
  @Input() itemType: string = ''; 
  displayedItems: any[] = [];
  allItems: any[] = [];
  searchForm: any;
  searchQuery: string = '';
  selectAllChecked: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.allItems = this.items;
    this.displayedItems = this.items;

    this.searchForm = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search';
    input.addEventListener('input', (event: any) => this.onSearchChange(event.target.value));
    this.searchForm.appendChild(input);

    this.render();
  }

  onSearchChange(query: string) {
    this.searchQuery = query.toLowerCase();
    this.filterItems();
  }

  filterItems() {
    if (this.searchQuery === '') {
      this.displayedItems = this.allItems;
    } else {
      this.displayedItems = this.allItems.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery)
      );
    }
    this.updateSelectAllStatus();
    this.render();
  }

  toggleSelectAll() {
    this.selectAllChecked = !this.selectAllChecked;
    this.displayedItems.forEach((item) => (item.selected = this.selectAllChecked));
    this.render();
  }

  itemSelectionChanged(item:any) {
    item.selected = !item.selected
    this.updateSelectAllStatus();
  }

  updateSelectAllStatus() {
    console.log('n',this.displayedItems)
    this.selectAllChecked = this.displayedItems.every(item => item.selected);
    console.log('2',this.selectAllChecked)
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchForm.querySelector('input').value = '';
    this.filterItems();
  }

  render() {
    const container = document.querySelector('.list-container') as HTMLElement;

    container.innerHTML = ''; // Clear previous content

    const h2 = document.createElement('h2');
    h2.textContent = this.itemType.charAt(0).toUpperCase() + this.itemType.slice(1);
    container.appendChild(h2);

    container.appendChild(this.searchForm);

    const label = document.createElement('label');
    if (this.displayedItems.length > 0) {
      const selectAllCheckbox = document.createElement('input');
      selectAllCheckbox.type = 'checkbox';
      selectAllCheckbox.checked = this.selectAllChecked;
      selectAllCheckbox.addEventListener('change', () => this.toggleSelectAll());
      label.appendChild(selectAllCheckbox);
      label.appendChild(document.createTextNode('Select All'));
    }
    container.appendChild(label);


    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'items-container';
    this.displayedItems.forEach(item => {
      const listItem = document.createElement('div');
      listItem.className = 'list-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item.selected;
      checkbox.addEventListener('change', () => this.itemSelectionChanged(item));
      listItem.appendChild(checkbox);

      const itemName = document.createElement('span');
      itemName.textContent = item.name;
      listItem.appendChild(itemName);

      itemsContainer.appendChild(listItem);
    });
    container.appendChild(itemsContainer);
  }
}

