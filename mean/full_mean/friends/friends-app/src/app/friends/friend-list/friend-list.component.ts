import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  public search: string = ""
  
  constructor(private _friendService: FriendService) {}

  ngOnInit() {
  }

  delete(friend: Friend){
    this._friendService.delete(friend);
  }

  filterTable(value){
    this._friendService.filterTable(value);
  }
}
