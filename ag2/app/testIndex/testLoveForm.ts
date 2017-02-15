import { Component } from '@angular/core';
import { Hero }    from '../class/hero';

@Component({
	selector: 'my-form',
    templateUrl:'./html/loveForm.html'
})

export class TestLoveForm {

	powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
}