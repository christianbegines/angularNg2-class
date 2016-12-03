import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App,providers } from './app';
import  { MainComponent,NotesContainerComponent } from './app/containers';
import {
  AppBarComponent,NoteCardComponent,
  NoteCreatorComponent,ColorPickerComponent
        } from './app/ui';

@NgModule({
  declarations: [
    App,
    MainComponent,
    AppBarComponent,
    NoteCardComponent,
    NotesContainerComponent,
    NoteCreatorComponent,
    ColorPickerComponent
  ],
  providers,
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  bootstrap:[App]
})

export class AppModule {

};

platformBrowserDynamic().bootstrapModule(AppModule);
