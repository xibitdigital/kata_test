"use strict";

import * as R from "ramda";
import { Item } from "./item";

export const isSulfuras = R.compose(
  R.contains("Sulfuras"),
  (x: Item) => R.prop("name")(x)
);
