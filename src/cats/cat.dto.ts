export class CreateCat {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}

export class UpdateCat {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}

export class ListAllEntities {
    readonly limit: number;
    readonly page: number;
    readonly apgesize: number;
}