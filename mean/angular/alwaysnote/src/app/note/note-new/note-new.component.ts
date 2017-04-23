import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  public newNote: Note= new Note();

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit(note) {
    this._noteService.create(this.newNote);
    this.newNote = new Note();
  }

}
