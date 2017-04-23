import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NoteService {
  public notes: Array<Note> = [];
  public ids: object= {};
  public showEdit: boolean=false;

  constructor() { }

  create(newNote) {
    let newId: number = Math.floor(Math.random() * (1000000 - 1)) + 1;
    while (this.ids[newId]) {
      newId = Math.floor(Math.random() * (1000000 - 1)) + 1;
    }
    this.ids[newId] = newId;
    newNote.id = newId;
    this.notes.push(newNote);
  }

  destroy(index) {
    this.notes.splice(index, 1);
  }

  update(newNote, index) {
    this.notes[index].note = newNote;
    this.notes[index].updateUpdatedDate(new Date);
  }

  retrieveNote(index) {
    return this.notes[index].note;
  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
  }
}
