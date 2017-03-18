import { DemoAddress, DemoModel } from '../../store/models/common';
import { ICity, IName } from '../../services/name/inames';
import { SpawnSyncReturns } from 'child_process';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/Rx';
import { LoadUserNamesAction } from '../../store/action/user-names-loaded-action';
import { IStoreApp } from '../../store/models/istore';
import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {

  names$ : Observable<IName[]>;
  cities$ : Observable<ICity[]>;
  demo : DemoModel;
  addr : DemoAddress;
  constructor( private store : Store<IStoreApp>) { 

    this.demo = new DemoModel();
    this.demo.address = new DemoAddress();
    this.demo.address.city = 'enter';
    this.demo.address.country = 'enter';
    this.demo.address.flatNo = 1;
    this.demo.address.state = 'enter';
    this.demo.address.streetNo = 'enter';
    this.demo.age = 1;
    this.demo.name = 'enter';
    this.demo.sex = 'enter'

    this.names$ = store.select(q => {  
       const dd = _.values(q.personDetails.names);
       return dd.map(q=>dx(q.id,q.name));
    });

    const dx = _.memoize ((a : number, b:string) => {
      return { id : a, name:b }
    });

    this.cities$ = store.select(q => { 
      return _.values(q.personDetails.cities);
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserNamesAction(2));
  } 
}
