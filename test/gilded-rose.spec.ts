import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function() {
  describe("All Other Items", () => {
    it("should degrade quality twice as fast once the sell by date has passed ", () => {
      const gildedRose = new GildedRose([new Item("foo", 0, 4)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(2);
    });
    it("should never have negative quality", () => {
      const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });
  });

  describe("`Aged Brie`", () => {
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
    it("should never be sold or quality decreased", () => {
      const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 50, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
      expect(items[0].sellIn).toEqual(50);
    });
  });

  describe.only("`Backstage passes`", () => {
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
    it.only("should be 0 quality on expiration", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 1)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(0);
    });
    it("should have the quality to a max of 50", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 50, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(50);
    });
  });
});
