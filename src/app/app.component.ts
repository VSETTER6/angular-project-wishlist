import { Component } from '@angular/core';
import { WishItem } from '../models/wishItem';

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
  ]
  title = 'my wishlist';
}