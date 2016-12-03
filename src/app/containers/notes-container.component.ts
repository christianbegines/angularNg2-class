import { Component, OnInit } from '@angular/core';

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
            *ngFor="let note of notes;let i=index"
            [note]="note"
            (checked)="onNoteChecked($event,i)"
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
  constructor() {}
  ngOnInit() {}
  notes= [
    {title: 'Chores' ,value: 'Dont eat so much  food',color: 'lightblue'},
    {title: 'Studie more englis' ,value: 'do angularTs in englis',color: 'green'},
    {title: 'Love irati' ,value: 'love her forever', color: 'pink'}
  ];

  onNoteChecked(i:number){
    this.notes.splice(i,1);
  }
  onCreateNote(note){
    this.notes.push(note);
  }
}
