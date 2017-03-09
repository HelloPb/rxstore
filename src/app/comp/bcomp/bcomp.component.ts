import { LoadHeaderAction } from '../../store/action/load-header-action';
import { ICity, IName } from '../../services/name/inames';
import { SpawnSyncReturns } from 'child_process';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/Rx';
import { LoadUserNamesAction } from '../../store/action/user-names-loaded-action';
import { IStoreApp } from '../../store/models/istore';
import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {

  names$ : Observable<IName[]>;
  cities$ : Observable<ICity[]>;

  constructor(private store : Store<IStoreApp>) { 
    this.names$ = store.select(q => { 
       debugger;
       const dd = _.values(q.personDetails.names);
       return dd.map(q=>dx(q.id,q.name));
    });

    const dx = _.memoize ((a : number, b:string) => {
      return { id : a, name:b }
    });

    this.cities$ = store.select(q => {
      debugger;
      return _.values(q.personDetails.cities);
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserNamesAction(2));
  }
  
  loadDescription(){
    this.store.dispatch(new LoadHeaderAction(1));
  }
}
