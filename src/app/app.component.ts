import { Component } from '@angular/core';
import { CatalogComponent } from './main/pages/catalog/catalog.component';
import { HeaderComponent } from './main/common/header/header.component';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CatalogComponent,
    HeaderComponent,
    MatMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dani-bolos';
}
