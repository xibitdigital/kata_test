"use strict";

import * as R from "ramda";
import { Item, isAgedBrie, isBackstagePass, isSulfuras, isConjured } from "./items";

const updateQuality = R.reduce(
  (acc, item: Item) => {
    if (isAgedBrie(item)) {
      if (item.quality === 50) {
        // nothing to do
      } else {
        item.quality = item.quality + 2;
      }
    } else if (isSulfuras(item)) {
      //  nothing to do here
    } else if (isBackstagePass(item)) {
      if (item.sellIn === 0) {
        item.quality = 0;
        // nothing to do
      } else if (item.sellIn === 0 || item.quality === 50) {
        // nothing to do
      } else if (item.sellIn <= 10 && item.sellIn > 5) {
        item.quality = item.quality + 2;
      } else if (item.sellIn <= 5 && item.sellIn > 0) {
        item.quality = item.quality + 3;
      } else {
        item.quality = item.quality + 1;
      }
    } else if (isConjured(item)) {
      if (item.sellIn == 0 && item.quality == 0) {
        // nothing to do
      } else if (item.sellIn == 0 && item.quality > 0) {
        item.quality = item.quality - 4;
      } else {
        item.quality = item.quality - 2;
      }
    } else {
      // all other items
      if (item.sellIn == 0 && item.quality == 0) {
        // nothing to do
      } else if (item.sellIn == 0 && item.quality > 0) {
        item.quality = item.quality - 2;
      } else {
        item.quality = item.quality - 1;
      }
    }

    return acc.concat(item);
  },
  [] as Item[]
);

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items = updateQuality(this.items);

    return this.items;
  }
}
