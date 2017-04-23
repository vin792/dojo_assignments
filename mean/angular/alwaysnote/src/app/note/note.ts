export class Note {
    private _created_at: Date = new Date();
    private _updated_at: Date = new Date();
    constructor(
        public id: number= null,
        public note: string= ''
    ) {}

    displayCreatedDate() {
        return this._created_at;
    }

    displayUpdatedDate() {
        return this._updated_at;
    }

    updateUpdatedDate(date) {
        this._updated_at = date;
    }
}
