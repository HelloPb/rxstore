import { Action } from '@ngrx/store';
import { IHeader } from '../models/istore';

export const LOAD_HEADER_ACTION: string = `LOAD_HEADER_ACTION`;
export class LoadHeaderAction implements Action  {
    readonly type : string = LOAD_HEADER_ACTION; 
    constructor(public payload : number) {}
}

export const HEADER_LOADED_ACTION = 'HEADER_LOADED_ACTION';
export class HeaderLoadedAction implements Action {
    readonly type : string = HEADER_LOADED_ACTION;
    constructor(public payload? : IHeader) { 
    }
}