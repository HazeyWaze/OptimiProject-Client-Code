import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:'
  port = '4001'
  configUrl = '/projects';
  constructor(private http: HttpClient, private router: Router) { }
  
  getDataMatching(pattern:String)
  {
    console.log('Filter');
    const fullUrl = this.url+this.port+this.configUrl +'/'+ pattern;
    console.log('Requesting ' + fullUrl) 
    return this.http.get<any>(fullUrl).pipe(
      catchError(this.handleError)
    );
  }
  
  getData()
  {
    const fullUrl = this.url+this.port+this.configUrl;
    console.log('Requesting ' + fullUrl) 
    return this.http.get<any>(fullUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert("Server not found");
      console.error('An error occurred:', error.error);
    } else {
      alert( "Backend returned code "+error.status);
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    
    return throwError(() => new Error('Something bad happened; please try again later.' + error.status));
  }
   
}





