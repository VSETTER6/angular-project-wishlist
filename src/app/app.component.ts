import { Component } from '@angular/core';
import { WishItem } from './../shared/models/wishItem';
import {EventService}  from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Grass that cuts itself')
  ];

  constructor(events: EventService) {
    events.listen('removeWish', (wish : any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  filter : any;
}