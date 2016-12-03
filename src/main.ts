import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app';
import  { MainComponent,NotesContainerComponent } from './app/containers';
import { AppBarComponent,NoteCardComponent,NoteCreatorComponent } from './app/ui';

@NgModule({
  declarations: [
    App,
    MainComponent,
    AppBarComponent,
    NoteCardComponent,
    NotesContainerComponent,
    NoteCreatorComponent

  ],
  imports:[
    BrowserModule,
    FormsModule
  ],
  bootstrap:[App]
})

export class AppModule {

};

platformBrowserDynamic().bootstrapModule(AppModule);
