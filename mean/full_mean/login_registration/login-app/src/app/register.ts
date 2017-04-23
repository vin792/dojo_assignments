export class Register {
    constructor(
        public email: string="",
        public firstName: string="",
        public lastName: string="",
        public password: string="",
        public passwordConfirm: string="",
        public birthday: Date= new Date()
    ) {}
}
