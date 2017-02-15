import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <!-- <ul>
  	<li *ngFor='let o of toDoList'>{{o}}</li>
  </ul>
  <button (click)='changeShow($event)'>{{isShow}}</button>
  <section *ngIf='isShow'>
  	NgShow : {{isShow}}
  </section>
  <section *ngIf='!isShow'>
  	NgHide : {{isShow}}
  </section>

  <section style='height:300px; width:300px; border:1px solid black'>

  <h3>#box</h3>
  	<input type='text' #box (click)="0" /> <br>
  	{{box.value}}

  <br>
  <h3>[(ngModel)]</h3>
  <input type='text' (keyup.enter)="onEnter()" [(ngModel)] = 'testNgModel' />
  {{testNgModel}}

  </section>

  <my-title></my-title> -->
  <button (click)='openTask("formEnable")' class='btn'>Form Task</button>
  <my-form *ngIf='formEnable'></my-form>
  `,
})
export class AppComponent  {
	 name = 'Angular'; 
	 toDoList = ['take a shower','read book','play game'];
	 isShow = true;
	 changeShow = function() {
	 	//console.log(e);
	 	this.isShow = !this.isShow;
	 }

	 onEnter () {
	 	console.log(' enter!!! ');
	 }

   clearAll() {
      //this.formEnable = false;
   }

   openTask(taskName : string)
   {
      this.clearAll();
      this[taskName] = true;
   }
 }
