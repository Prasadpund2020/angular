import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Angular Application';




}



