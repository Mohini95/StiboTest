import { Component, OnInit, } from '@angular/core';
import * as jsonData from 'src/assets/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'stibo-test';
  jsonData: any; // Define a property to store the loaded data

  ngOnInit() {
    // Assign the loaded data to the property
    this.jsonData = jsonData;
  }

}
