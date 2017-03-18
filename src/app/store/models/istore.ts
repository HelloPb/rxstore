import { ICity, IName } from '../../services/name/inames';

export interface IPersons {
    names : {[key:number]:IName};
    cities : {[key:number]:ICity};
} 

export const PERSONS : IPersons = {
    names : undefined,
    cities: undefined
}

export interface IHeader {    
    name:string;
    description : string;
}

export const HEADER : IHeader = {
    name : 'ngrx / store demo',
    description : 'Welcome.  This is ngrx store demo application.'
}

export interface IStoreApp {
    personDetails : IPersons;
    header : IHeader;
}

export const STOREAPP : IStoreApp = {
    personDetails : PERSONS,
    header : HEADER
}

