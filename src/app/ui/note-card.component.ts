import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'note-card',
  styles:[`
    .note-card {
        padding: 15px;
        border-radius: 2px;
        width: 100%;
        position: relative;
    }
    .title {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: left;
      color: rgba(0,0,0,0.8);
    }
    .value {
      text-align: left;
      font-size: 1.4rem;
      font-weight: 200;
    }
    .icon {
      position: absolute;
      color: black;
      border: 1px solid lightgrey;
      background-color: white;
      font-size: 30px;
      top: -10px;
      left: -10px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      cursor: pointer;
    }
    `],
  template: `
    <div (mouseleave)="toggleCheck()"(mouseenter)="toggleCheck()"
          class="note-card row shadow-1"
          [ngStyle]="{'background-color':note.color}">
      <div class="icon" (click)="onChecked()"
          *ngIf="showCheck">
        <i class="material-icons">check</i>
      </div>
      <div class="col-xs-12 title">
        {{ note.title }}
      </div>
      <div class="col-xs-12 value">
        {{ note.value }}
      </div>
    </div>
  `,
})
export class NoteCardComponent {
  @Input()note = {};
  @Output()checked= new EventEmitter();
  showCheck:boolean=false;

  onChecked(){
    this.checked.next(this.note);
  }

  toggleCheck(){
    this.showCheck=!this.showCheck;
  }


}
