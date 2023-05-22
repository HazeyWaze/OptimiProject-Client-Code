import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:'
  port = '4001'
  configUrl = '/projects';
  constructor(private http: HttpClient) { }
  
  getDataMatching(pattern:String)
  {
    console.log('Filter');
    const fullUrl = this.url+this.port+this.configUrl +'/'+ pattern;
    console.log('Requesting ' + fullUrl) 
    return this.http.get<any>(fullUrl);
  }
  
  getData()
  {
    const fullUrl = this.url+this.port+this.configUrl;
    console.log('Requesting ' + fullUrl) 
    return this.http.get<any>(fullUrl);
  }
   
}





