import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable, tap } from 'rxjs';

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

  login = ():Observable<Auth> => {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              tap( ( auth:Auth ) => this._auth = auth )
            )
  }

}
