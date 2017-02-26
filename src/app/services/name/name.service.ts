import { INames } from './inames';
import { IStoreApp } from '../../store/models/istore';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/map';

@Injectable()
export class NameService {

  constructor(private http: Http) {}

  getNames(n : number):Observable<INames> {
    return this.http.get('/assets/json/names.json').map(q=> q.json());
  }
}
