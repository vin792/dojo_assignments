export class Widget {
    constructor(
        public _id: any= null,
        public title: string= '',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) {}
}
