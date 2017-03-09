import { Observable } from 'rxjs/Rx';
import { LoadHeaderAction } from '../../store/action/load-header-action';
import { IStoreApp } from '../../store/models/istore';
import { Store } from '@ngrx/store'; 
import { Component, OnInit } from '@angular/core';
import  * as _ from  'lodash';
@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent implements OnInit {

  head : Observable<string>;
  dumm : Observable<any>;
  constructor(private store : Store<IStoreApp>) { 
  
    this.head = store.select(q=> {
      debugger;
      return q.header.name;
    });
    this.dumm = store.select(q=>{
      debugger;
      const v = _.values(q.personDetails.names);
      return v.map(z=>this.viewMapper(z.id, z.name));
    });
  }
  
  viewMapper = _.memoize(( id: number, name: string) => { 
    debugger;
    return {id : id, name : name, cock : `name : ${name} and id : ${id}` }
  });

  ngOnInit() { }
  
}
