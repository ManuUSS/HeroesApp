import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HerosResponse } from '../interfaces/heros.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http:HttpClient ) { }

  getHeros():Observable<HerosResponse[]> {
    return this.http.get<HerosResponse[]>('http://localhost:3000/heroes');
  }

  getHeroById( id:string ):Observable<HerosResponse> {
    return this.http.get<HerosResponse>(`http://localhost:3000/heroes/${ id }`);
  }

}
