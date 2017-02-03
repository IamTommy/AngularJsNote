import { Component } from '@angular/core';
@Component({
  selector: 'my-title',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class MyNewTitle {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}