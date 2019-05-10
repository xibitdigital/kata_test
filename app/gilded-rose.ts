"use strict";

import * as R from "ramda";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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
    } else {
      // all other items
      if (item.sellIn == 0 && item.quality == 0) {
        // nothing to do
      } else if (item.sellIn == 0 && item.quality > 0) {
        item.quality = item.quality - 2;
      }
    }

    return acc.concat(item);
  },
  [] as Item[]
);

const isAgedBrie = R.compose(
  R.contains("Aged Brie"),
  (x: Item) => R.prop("name")(x)
);

const isSulfuras = R.compose(
  R.contains("Sulfuras"),
  (x: Item) => R.prop("name")(x)
);

const isBackstagePass = R.compose(
  R.contains("Backstage passes"),
  (x: Item) => R.prop("name")(x)
);

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    // for (let i = 0; i < this.items.length; i++) {
    //   if (
    //     this.items[i].name != "Aged Brie" &&
    //     this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
    //   ) {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //         this.items[i].quality = this.items[i].quality - 1;
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1;
    //       if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != "Aged Brie") {
    //       if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //             this.items[i].quality = this.items[i].quality - 1;
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality;
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1;
    //       }
    //     }
    //   }
    // }

    this.items = updateQuality(this.items); //?

    return this.items;
  }
}
