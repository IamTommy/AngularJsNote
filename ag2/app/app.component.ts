import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl : './html/index.html',
})
export class AppComponent  {

	taskList = [
		{ name : 'Form Task', key : 'formEnable' },
		{ name : 'Inversion of Control',key:'ioc' }
		{ name : 'Gammer Test',key:'gammar'}
	];

	testParam = {
		testCode : 'test'
	}

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
   		for(let task of this.taskList)
   		{
   			this[task.key] = false;
   		}
   }

   openTask(taskName : string)
   {
      this.clearAll();
      this[taskName] = true;
   }
 }
