import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import { MyNewTitle }  from './testIndex/newTitle';
import { TestLoveForm }  from './testIndex/testLoveForm';
import { TestIOC }  from './testIndex/testIOC';


@NgModule({
  imports:      [ BrowserModule,FormsModule  ],
  declarations: [ AppComponent,MyNewTitle,TestLoveForm,TestIOC ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
