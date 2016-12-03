import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent,NotesContainerComponent,AboutComponent } from './containers';

export const routes :ModuleWithProviders=RouterModule.forRoot([
  {
    path:'',
    component:MainComponent,
    children:[
      { path:'',component:NotesContainerComponent},
      {path:'',component:AboutComponent}
    ]
  },
  {path:'**',redirectTo: ''}
])
