import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users: Array<User> = [new User("Mark"), new User("Jess")];
  constructor() { }
}
