export interface IMakes {
    codigo : Number;
    nome : String;
}

export interface IModels{
    modelos : {
        codigo : String;
        nome: String;
    },
    anos : {
        codigo : String;
        nome: String;
    }
}

export interface IYears{
    nome : String;
    codigo : String;
}