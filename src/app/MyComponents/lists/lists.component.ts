import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as jsonData from 'src/assets/data.json';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() itemType: string = '';

  jsonData:any;
  displayedItems: any[] = [];
  allItems: any[] = [];
  currentIndex: number = 0;
  noItemsFound: boolean = false;

  searchControl = new FormControl('');
  selectAllChecked: boolean = false;

  ngOnInit() {

   this.allItems = this.items;
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((newValue:any) => {
        this.filterItems(newValue);
      });
  }

  toggleSelectAll() {
    this.selectAllChecked = !this.selectAllChecked;
    
    this.items.forEach(item => {
      item.selected = this.selectAllChecked;
    });
  }
  
    itemSelectionChanged(item: any) {
      item.selected = !item.selected;
      this.updateSelectAllStatus();
    }
  
    updateSelectAllStatus() {
      this.displayedItems = this.items;
      this.selectAllChecked = this.items.every(item => item.selected);
    }
  
    
  filterItems(query: string) {
    this.currentIndex = 0; // Reset index when filtering
    this.noItemsFound = false; 

    if (this.itemType === 'countries') {
      this.displayedItems = this.items.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase()) || item.code.toLowerCase().includes(query.toLowerCase());
      });
      this.items = this.displayedItems;
    } else if (this.itemType === 'payments') {
      this.displayedItems = this.items.filter(item => {
        return item.status.toLowerCase().includes(query.toLowerCase());
      });
      this.items = this.displayedItems;
    } else if (this.itemType === 'users') {
      this.displayedItems = this.items.filter(item => {
        return item.firstName.toLowerCase().includes(query.toLowerCase()) 
        || item.lastName.toLowerCase().includes(query.toLowerCase())
        || item.email.toLowerCase().includes(query.toLowerCase());
      });
      this.items = this.displayedItems;
    }

    if (this.displayedItems.length === 0) {
      this.noItemsFound = true;
    }

  }

  clearSearch() {
    this.searchControl.setValue('');
    this.items = this.allItems;
  }

  
  
}
