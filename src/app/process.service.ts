import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProcess } from './models/iprocess';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private _url = '/assets/data/process.json';
  constructor(
    private http: HttpClient
  ) { }

  getProcess(): Observable<IProcess>{
    return this.http.get<IProcess>(this._url);
  }
}
