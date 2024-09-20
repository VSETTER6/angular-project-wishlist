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

  listFilter : String = '0';

  newWishText = "";

  title = 'wishlist';

  visableItems : WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value : any){
    if(value == 0) {
      this.visableItems = this.items;
    }
    else if (value == 1) {
      this.visableItems = this.items.filter(item => !item.isCompleted);
    }
    else {
      this.visableItems = this.items.filter(item => item.isCompleted);
    }
  }

  toggleItem(item : WishItem) {
    item.isCompleted = !item.isCompleted;
    console.log(item);
  }
}