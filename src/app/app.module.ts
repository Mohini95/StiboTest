import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
/* List component
import { ListsComponent } from './MyComponents/lists/lists.component';
*/
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReusableListComponent } from './reusable-list/reusable-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: ReusableListComponent, data: { itemType: 'countries' } },
  { path: 'payments', component: ReusableListComponent, data: { itemType: 'payments' } },
  { path: 'users', component: ReusableListComponent, data: { itemType: 'users' } }
];


@NgModule({
  declarations: [
    AppComponent,
    ReusableListComponent,
    AppToolbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


