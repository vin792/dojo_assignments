import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Friend } from '../friend';

@Component({
  selector: 'app-friend-show',
  templateUrl: './friend-show.component.html',
  styleUrls: ['./friend-show.component.css']
})
export class FriendShowComponent implements OnInit {
  
  public localFriend: Friend = new Friend();

  constructor(private _friendService: FriendService, private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    this._friendService.retrieve(this._route.snapshot.params['id'])
      .subscribe(
        (data) => this.localFriend = data,
        (error: any) => console.log(error))
  }

}
