import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  public editNote: number;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  edit(index) {
    this._noteService.toggleEdit();
    this.editNote = index;
  }

}
