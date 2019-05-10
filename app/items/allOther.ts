import { Item } from "./item";

export const updateAllOthersQuality = (item: Item) => {
  // all other items
  if (item.sellIn == 0 && item.quality == 0) {
    // nothing to do
  } else if (item.sellIn == 0 && item.quality > 0) {
    item.quality = item.quality - 2;
  } else {
    item.quality = item.quality - 1;
  }
  return item;
};
