import { Item, GildedRose } from "../app/gilded-rose";

// Once the sell by date has passed, Quality degrades twice as fast
// The Quality of an item is never negative
// "Aged Brie" actually increases in Quality the older it gets
// The Quality of an item is never more than 50
// "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
// "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
// Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
// Quality drops to 0 after the concert

describe("Gilded Rose", function() {
  it("should degrade quality twice as fast once the sell by date has passed ", () => {});
  it("should never have negative quality", () => {});
  it("should have the quality to a max of 50", () => {});

  describe("Aged Brie", () => {
    it("should increase quality the older it gets", () => {});
  });

  describe("Sulfuras", () => {
    it("should be sold immediately", () => {});
  });

  describe("Backstage passes", () => {
    it("should increase quality the older it gets", () => {});
    it("should increase quality by 2 when 10 days or less", () => {});
    it("should increase quality by 3 when 5 days or less", () => {});
    it("should be 0 quality on expiration", () => {});
  });
});
