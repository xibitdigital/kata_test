"use strict";

import * as R from "ramda";
import {
  Item,
  isAgedBrie,
  isBackstagePass,
  isSulfuras,
  isConjured,
  updateBackstagePassQuality,
  updateSulfurasQuality,
  updateBrieQuality,
  updateConjuredQuality,
  updateAllOthersQuality
} from "./items";

const updateQuality = R.reduce(
  (acc, item: Item) => {
    if (isAgedBrie(item)) {
      updateBrieQuality(item);
    } else if (isSulfuras(item)) {
      updateSulfurasQuality(item);
    } else if (isBackstagePass(item)) {
      updateBackstagePassQuality(item);
    } else if (isConjured(item)) {
      updateConjuredQuality(item);
    } else {
      updateAllOthersQuality(item);
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
    return updateQuality(this.items);
  }
}
