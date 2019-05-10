import { GildedRose } from "../app/gilded-rose";
import { Item, isConjured, isAgedBrie, isBackstagePass, isSulfuras } from "../app/items";

describe("Gilded Rose", function() {
  describe("All Other Items", () => {
    it("should degrade quality twice as fast once the sell by date has passed ", () => {
      const gildedRose = new GildedRose([new Item("foo", 0, 4)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(2);
    });
    it("should decrease quality twice as fast normal items", () => {
      const gildedRose = new GildedRose([new Item("foo", 2, 2)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(1);
    });
    it("should never have negative quality", () => {
      const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });
  });

  describe("`Aged Brie`", () => {
    it("should be an `Aged Brie` Item", () => {
      const expectedResult = true;
      const actualResult = isAgedBrie(new Item("Aged Brie", 0, 0));

      expect(actualResult).toEqual(expectedResult);
    });
    it("should increase quality the older it gets", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 0, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(2);
    });
    it("should have the quality to a max of 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 0, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(50);
    });
  });

  describe("`Sulfuras`, Hand of Ragnaros", () => {
    it("should be a `Sulfuras` Item", () => {
      const expectedResult = true;
      const actualResult = isSulfuras(new Item("Sulfuras, stuff", 0, 0));

      expect(actualResult).toEqual(expectedResult);
    });
    it("should never be sold or quality decreased", () => {
      const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 50, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(50);
    });
  });

  describe("`Backstage passes`", () => {
    it("should be a `Backstage passes` Item", () => {
      const expectedResult = true;
      const actualResult = isBackstagePass(new Item("Backstage passes, stuff", 0, 0));

      expect(actualResult).toEqual(expectedResult);
    });
    it("should increase quality the older it gets", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 50, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(1);
    });
    it("should increase quality by 2 when 10 days or less", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(2);
    });
    it("should increase quality by 3 when 5 days or less", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(3);
    });
    it("should be 0 quality on expiration", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 1)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });
    it("should have the quality to a max of 50", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 50, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(50);
    });
  });

  describe("`Conjured` stuff", () => {
    it("should be a `Conjured` Item", () => {
      const expectedResult = true;
      const actualResult = isConjured(new Item("Conjured stuff", 0, 0));

      expect(actualResult).toEqual(expectedResult);
    });
    it("should decrease quality twice as fast normal items", () => {
      const gildedRose = new GildedRose([new Item("Conjured stuff", 2, 2)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });
    it("should degrade quality twice as fast as normal items once the sell by date has passed ", () => {
      const gildedRose = new GildedRose([new Item("Conjured stuff", 0, 4)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });
  });
});
