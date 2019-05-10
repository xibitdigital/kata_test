"use strict";

import * as R from "ramda";
import { Item } from "./item";

export const isBackstagePass = R.compose(
  R.contains("Backstage passes"),
  (x: Item) => R.prop("name")(x)
);

export const updateBackstagePassQuality = (item: Item) => {
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
  return item;
};
