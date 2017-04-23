import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public newRegister: Register = new Register()

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._userService.createUser(this.newRegister);
    this.newRegister = new Register();
  }

}
