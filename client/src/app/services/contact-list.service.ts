import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private endpoint = 'http://localhost:3000/api/contact-list';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }
}
