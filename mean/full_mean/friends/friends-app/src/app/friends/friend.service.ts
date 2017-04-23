import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Friend } from './friend';

@Injectable()
export class FriendService {

  public friends: Array<Friend> = [];
  public friends2: Array<Friend> = [];
  public editFriend: Friend= new Friend();
  
  constructor(private _http: Http) {
      this.index();
   }

  index(){
    this._http.get('/friends')
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.friends = data 
          this.friends2 = data
        },
        (error: any) => console.log(error))
  }

  create(newFriend: Friend){
    this._http.post('/createfriend', newFriend)
      .subscribe(
        (data: Response) => {},
        (error: any) => console.log(error),
        () => this.index());
  }

  delete(friend){
    this._http.delete('/deletefriend/'+friend._id)
      .subscribe(
        (data: Response) => {},
        (error: any) => console.log(error),
        () => this.index());
  }

  retrieve(id) {
    return this._http.get('/retrievefriend/' + id)
      .map((data: Response) => data.json())
  }

  filterTable(value){
    this.friends2 = Object.assign([], this.friends).filter(
      friend => friend.firstName.toLowerCase().indexOf(value.toLowerCase()) > -1)
  }

  update(localEdits){
    this._http.patch('/updatefriend/' + localEdits.id, localEdits)
      .subscribe(
        (data: Response) => {},
        (error: any) => console.log(error),
        () => this.index());
  }

}
