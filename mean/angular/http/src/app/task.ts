export class Task {
    constructor(
        public title: string= '',
        public content: string= '',
        public created_at: Date= new Date()
    ) {}
}
