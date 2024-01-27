import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CatalogService } from './services/catalog.service';
import { HttpClientModule } from '@angular/common/http';
import { CatalogResponseModel } from './services/models/catalog-response.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    MatCardModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {

  public products: CatalogResponseModel[] = [];

  constructor(
    private catalogService: CatalogService
  ) {

  }
  ngOnInit(): void {
    this.getProducts();
  }


  public getProducts() {

    this.catalogService.getProducts()
      .subscribe((products: any) => {
        this.products = products.data;
        console.log(this.products);
      });
  }


}
