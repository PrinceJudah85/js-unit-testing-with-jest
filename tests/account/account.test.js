const account = require('../../js/account/account');

describe("getPastPurchases", () => {
  test("Test gets past purchase history", () => {
    const userId = 123;
    const items = account.getPastPurchases(userId);
    expect(items).toEqual([
      {
        name: "Punk Goes Pop - 90s",
        tickets: 2,
        price: 40.00,
      },
      {
        name: "Adventures Live!",
        tickets: 5,
        price: 120.00,
      },
      {
        name: "Folk dance party!",
        tickets: 3,
        price: 75.00,
      }
    ]);
  });
});