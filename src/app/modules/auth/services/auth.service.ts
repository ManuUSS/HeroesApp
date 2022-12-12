import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap, map, of } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth():Auth {
    return { ...this._auth! };
  }

  constructor( private http:HttpClient ) { }

  verifyAuth = ():Observable<boolean> => {
    if( !localStorage.getItem('id') )
      return of(false);
    
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              map( auth => {
                this._auth = auth;
                return true;
              })
            );
  }

  login = ():Observable<Auth> => {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              tap( ( auth:Auth ) => this._auth = auth ),
              tap( ( auth:Auth ) => localStorage.setItem('id', auth.id) )
            )
  }

}
