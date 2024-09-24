import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { filter } from 'rxjs';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isCompleted,
  (item : WishItem) => item.isCompleted
]

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

  listFilter : any = '0';

  newWishText = "";

  title = 'wishlist';

  get visableItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  };

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item : WishItem) {
    item.isCompleted = !item.isCompleted;
    console.log(item);
  }
}