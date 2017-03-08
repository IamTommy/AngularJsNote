import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import { MyNewTitle }  from './testIndex/newTitle';
import { TestLoveForm }  from './testIndex/testLoveForm';
import { TestIOC }  from './testIndex/testIOC';
import { MyGammarTest } from './testIndex/grammar';
import { UserService } from './services/userService';
import { LogService } from './services/logService';



@NgModule({
  imports:      [ BrowserModule,FormsModule  ],
    declarations: [ AppComponent,MyNewTitle,TestLoveForm,TestIOC,MyGammarTest ],
    providers:	[UserService,LogService],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
		constructor(userService : UserService) {
		}
}
