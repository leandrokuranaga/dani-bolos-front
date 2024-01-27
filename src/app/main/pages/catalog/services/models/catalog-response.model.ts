export class CatalogResponseModel {
    id         : number  = 0;
    name       : string  = '';
    category   : string  = '';
    description: string  = '';
    typeWeight : string  = '';
    weight     : number  = 0;
    stock      : number  = 0;
    unit       : number  = 0;
    urlImage   : string  = '';
    price      : number  = 0;
    isBulk     : boolean = false;
}
