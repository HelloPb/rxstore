import { INames } from '../../services/name/inames';
import { Action } from '@ngrx/store';

export class LoadUserNamesAction implements Action {
    readonly type:string = LOAD_USER_NAMES_ACTION;
}
export const LOAD_USER_NAMES_ACTION = 'LOAD_USER_NAMES_ACTION';

export class UserNamesLoadedAction implements Action {
    readonly type:string = 'USER_NAMES_LOADED_ACTION';
    constructor(public payload?:INames) { }
}
export const USER_NAMES_LOADED_ACTION = 'USER_NAMES_LOADED_ACTION';
