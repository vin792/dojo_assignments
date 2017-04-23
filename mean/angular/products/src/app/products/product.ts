export class Product {

    private _created_at: Date = new Date();
    private _updated_at: Date = new Date();

    constructor(
        public name: string= '',
        public description: string= '',
        public price: number= null,
        public quantity: number= null,
    ) {}
}

