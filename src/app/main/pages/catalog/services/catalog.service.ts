import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CatalogResponseModel } from './models/catalog-response.model';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<CatalogResponseModel> {
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN0cmluZyIsIm1ldVBldCI6InBpdHVjYSIsImp0aSI6IjEyNjRjZjdkLWRhMmItNGViMi1hZDlhLTYyNmMxOTc0YzI2YiIsImV4cCI6MTcxOTM0ODkxOH0.b01U-YXAczQBnSy-ajyfZldlHt-hHjqiAxREdPtIlgg';
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // });

    const url = 'https://localhost:44384/api/Product';
    return this.http
      .get<CatalogResponseModel>(url)
      .pipe(catchError((error: any) => throwError(() => new Error(error.message))));
  }
}
