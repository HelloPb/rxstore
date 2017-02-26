import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { LOAD_USER_NAMES_ACTION, UserNamesLoadedAction } from '../action/user-names-loaded-action';
import { Actions, Effect } from '@ngrx/effects';
import { NameService } from '../../services/name/name.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadUserNameEffectService {

  constructor(private actions$:Actions, private nameService : NameService) { }

  @Effect() names$:Observable<Action> = this.actions$.ofType(LOAD_USER_NAMES_ACTION)
          .switchMap( (q) => {  return this.nameService.getNames(q.payload)})
          .map(q=> new UserNamesLoadedAction(q));                      
}
