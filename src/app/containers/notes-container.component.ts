import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services';

@Component({
  selector: 'notes-container',
  template:`
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes;let i =index"
            (checked)="onNoteChecked($event)"
          >
          </note-card>
        </div>
      </div>
    </div>
  ` ,
  styles:[`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
    `]
})
export class NotesContainerComponent implements OnInit {
  notes= [];

  constructor(private noteService:NoteService ) {
    this.noteService.getNotes()
    .subscribe(res=>this.notes= res.data);
  }
  ngOnInit() {}
  onCreateNote(note){
      this.noteService.createNote(note)
      .subscribe(note => this.notes.push(note));

  }

  onNoteChecked(note){
    this.noteService.completeNote(note)
    .subscribe(note=>{
      const i=this.notes.findIndex(localNote=>localNote.id===note.id);
      this.notes.splice(i,1);
    })
  }

}
