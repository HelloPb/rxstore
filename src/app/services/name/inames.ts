
export interface IName{
    name : string;
    id: number;
}

export interface ICity {
    name : string;
    id : number;
}

export interface INames {
    names : IName [];
    cities : ICity [];
}
