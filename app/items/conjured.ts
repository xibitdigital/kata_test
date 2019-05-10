"use strict";

import * as R from "ramda";
import { Item } from "./item";

export const isConjured = R.compose(
  R.contains("Conjured"),
  (x: Item) => R.prop("name")(x)
);
