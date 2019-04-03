import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../models/project';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  private user: User;
  private authToken: any = null;

  private endpoint = 'https://nusrat-comp308-w2019-portfolio.herokuapp.com/api/project-list/';
  //private endpoint = 'http://localhost:3000/api/project-list/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public getList(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getProject(project: Project): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'edit/' + project._id, this.httpOptions);
  }
  public addProject(project: Project): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'add', project, this.httpOptions);
  }

  public editProject(project: Project): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'edit/' + project._id, project, this.httpOptions);
  }

  public deleteProject(project: Project): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'delete/' + project._id, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
