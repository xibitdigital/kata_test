"use strict";

import * as R from "ramda";
import { Item } from "./item";

export const isAgedBrie = R.compose(
  R.contains("Aged Brie"),
  (x: Item) => R.prop("name")(x)
);

export const updateBrieQuality = (item: Item) => {
  if (item.quality === 50) {
    // nothing to do
  } else {
    item.quality = item.quality + 2;
  }
  return item;
};
