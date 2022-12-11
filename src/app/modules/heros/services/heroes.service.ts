import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HerosResponse } from '../interfaces/heros.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http:HttpClient ) { }

  getHeros():Observable<HerosResponse[]> {
    return this.http.get<HerosResponse[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroById( id:string ):Observable<HerosResponse> {
    return this.http.get<HerosResponse>(`${ this.baseUrl }/heroes/${ id }`);
  }

  getHeroSugerences( term:string ):Observable<HerosResponse[]> {
    return this.http.get<HerosResponse[]>(`${ this.baseUrl }/heroes?q=${ term }&_limit=6`);
  }

  addHero( hero:HerosResponse ):Observable<HerosResponse> {
    return this.http.post<HerosResponse>(`${ this.baseUrl }/heroes`, hero);
  }

}
