"use strict";

import * as R from "ramda";
import { Item } from "./item";

export const isAgedBrie = R.compose(
  R.contains("Aged Brie"),
  (x: Item) => R.prop("name")(x)
);
