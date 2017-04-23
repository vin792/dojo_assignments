import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-create',
  templateUrl: './friend-create.component.html',
  styleUrls: ['./friend-create.component.css']
})
export class FriendCreateComponent implements OnInit {

  public newFriend: Friend = new Friend();
  
  constructor(private _friendService: FriendService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this._friendService.create(this.newFriend);
    this.newFriend = new Friend();
    this._router.navigate(['']); 
  }

}
