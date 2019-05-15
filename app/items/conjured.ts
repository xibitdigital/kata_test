"use strict";

import * as R from "ramda";
import { Item } from "./item";

export const isConjured = R.compose(
  R.contains("Conjured"),
  (x: Item) => R.prop("name")(x)
);

export const updateConjuredQuality = (item: Item) => {
  if (item.sellIn == 0 && item.quality == 0) {
    // nothing to do
  } else if (item.sellIn == 0 && item.quality > 0) {
    item.quality = item.quality - 4;
  } else {
    item.quality = item.quality - 2;
  }
  return item;
};
