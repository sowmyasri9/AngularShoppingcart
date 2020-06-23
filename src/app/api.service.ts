import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/login";
  private SHOPPING_ITEMS_URL="http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get(this.SERVER_URL);  
  }  
  public getProducts(){
    return this.httpClient.get(this.SHOPPING_ITEMS_URL);
  }
  public post(obj:any):Observable<any>{

    return this.httpClient.post<any>(this.SERVER_URL,obj);
}



  }
