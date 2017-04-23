import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-friend-edit',
  templateUrl: './friend-edit.component.html',
  styleUrls: ['./friend-edit.component.css']
})
export class FriendEditComponent implements OnInit {

  // public localEdits: Friend = new Friend();
  public localEdits = {id:"", firstName: "", lastName: "", birthday: ""};

  constructor(private _friendService: FriendService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._friendService.retrieve(this._route.snapshot.params['id'])
      .subscribe(
        (data) => {
          this.localEdits.birthday = data.birthday.substring(0,10);
          this.localEdits.firstName = data.firstName;
          this.localEdits.lastName = data.lastName;
          this.localEdits.id = data._id;
        },
        (error: any) => console.log(error))
  }

  onSubmit() {
    this._friendService.update(this.localEdits);
    this._router.navigate(['']); 
  }

}
