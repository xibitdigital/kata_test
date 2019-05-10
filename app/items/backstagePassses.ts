"use strict";

import * as R from "ramda";
import { Item } from "./item";

export const isBackstagePass = R.compose(
  R.contains("Backstage passes"),
  (x: Item) => R.prop("name")(x)
);
