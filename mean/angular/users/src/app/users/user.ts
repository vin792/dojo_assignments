export class User {
    public created_at: Date = new Date();
    public updated_at: Date = new Date();
    constructor(public name: string){}
}
