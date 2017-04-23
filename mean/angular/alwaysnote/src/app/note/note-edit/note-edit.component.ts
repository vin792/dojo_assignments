import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  @Input() index: number;

  public changeNote: string;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this.changeNote = this._noteService.retrieveNote(this.index);
    console.log(this.changeNote, this.index);
  }

  onSubmit() {
    this._noteService.update(this.changeNote, this.index);
    this._noteService.toggleEdit();
  }

  cancelSubmit() {
    this._noteService.toggleEdit();
  }
}
