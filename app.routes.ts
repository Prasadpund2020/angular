import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableSortingExample } from './table-sorting-example/table-sorting-example.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default route
  { path: 'home', component: HomeComponent },
  {path: 'table-sorting-example' ,component:TableSortingExample},
//   { path: 'contact', component: ContactComponent }
];
