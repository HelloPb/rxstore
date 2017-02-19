import { LoadUserNamesAction } from '../../store/action/user-names-loaded-action';
import { IStoreApp } from '../../store/models/istore';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {

  constructor(private store : Store<IStoreApp>) { 

    
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserNamesAction);
  }

}
