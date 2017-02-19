import { ICity, IName } from '../../services/name/inames';

export interface IPersons {
    names : {[key:number]:IName};
    cities : {[key:number]:ICity};
}
export interface IHeader {    
    name:string;
    description : string;
}

export interface IStoreApp {
    personDetails : IPersons;
    header : IHeader;
}
