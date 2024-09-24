import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})

export class WishListItemComponent {
  @Input() wishText! : string;

  @Input() fullfilled! : boolean;
  @Output() fullfilledChanged = new EventEmitter<boolean>();


  constructor() {}

  ngOninit() {}

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChanged.emit(this.fullfilled);
  }
}