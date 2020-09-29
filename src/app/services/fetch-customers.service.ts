import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchCustomersService {

  constructor(private http: HttpClient) { }

  private apiUrl() {
    let apiUrl = environment.apiUrl;
    return `${apiUrl}/admin/api/2020-07/customers.json`;
  }

  public fetchCustomers(): Observable<HttpResponse<any>> {
    let url = this.apiUrl();
    return this.http.get<any>(url, { observe: 'response', headers: {'X-Shopify-Access-Token': environment.authCode} });
  }
}
