import { Component, OnInit } from '@angular/core';
import { Note } from './../note';
import { NoteService } from './../note.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  public newNote: Note = new Note();

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit(formData: NgForm) {
    this._noteService.createNote(new Note(formData.value.title, formData.value.description));
    this.newNote = new Note();
  }
}
