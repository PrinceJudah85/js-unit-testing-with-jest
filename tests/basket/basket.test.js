// const basket = require("../");
// const {Event} = require("../../js/event/event");
// const {BasketItem} = require("../")
// const {Users} = require("../")

// ================ [Hooks] ================= //
/*
beforeAll(() => {
  // Runs once before any tests have run
});

beforeEach(() => {
  // Runs before every test
});

afterEach(() => {
  // Runs after every test
});

afterAll(() => {
  // Runs after all test have run
});
*/
// ============================================ //
describe("calculateTotal", () => {
  let events = [];
  let items = [];

  beforeEach(() => {
    events = [
      new Event(1, "A Night At The Proms", 2500.0, 2500, 2500),
      new Event(2, "Taylor Swift", 50.0, 5500, 2500),
      new Event(3, "Rage Against The Machine", 35.0, 2500, 2500),
    ];

    items = [
      new BasketItem(events[0], 1),
      new BasketItem(events[1], 4),
      new BasketItem(events[2], 2),
    ];
  });

  test("Test calculates total basket price when no discount applied", () => {
    const total = basket.calculateTotal(items);

    expect(total).toBeCloseTo(2770.0, 2);
  });

  test("Test calculates total basket price with discount", () => {
    events = [
      new Event(1, "A Night At The Proms", 2500.0, 2500, 2500),
      new Event(2, "Taylor Swift", 50.0, 5500, 2500),
      new Event(3, "Rage Against The Machine", 35.0, 2500, 2500),
    ];

    items = [
      new BasketItem(events[0], 1),
      new BasketItem(events[1], 4),
      new BasketItem(events[2], 2),
    ];
  });
});

describe("showAdverts", () => {
  test("Does not show adverts for premium users", () => {
    let user = new User(1, "Test User");
    user.isPremium = true;

    expect(basket.showAdverts(user)).toBe(false);
    // expect(basket.showAdverts(user)).not.toBe(false) // (.not can be used with all matchers to check the opposite condition)
  });

  test("Shows adverts for non-premium users", () => {
    let user = new User(1, "Test User");

    expect(basket.showAdverts(user)).toBe(true);
  });
});

describe("serializeBasketItemsToJson", () => {
  test("basket items are serialized correctly", () => {
    const events = [
      new Event(1, "A Night At The Proms", 2500.0, 2500, 2500),
      new Event(3, "Raging Machine", 35.0, 2500, 2500),
    ];

    const items = [
      new BasketItem(events[0], 1), 
      new BasketItem(events[1], 2)
    ];

    itemsSerializedToJson = [
      {
        event: {
          id: 1,
          name: "A Night At The Proms",
          ticketPrice: 2500.0,
          totalTickets: 2500,
          ticketsRemaining: 2500,
        },
        ticketCount: 1,
      },
      {
        event: {
          id: 3,
          name: "Raging Machine",
          ticketPrice: 35.0,
          totalTickets: 2500,
          ticketsRemaining: 2500,
        },
        ticketCount: 2,
      },
    ];

    function serializeItemsToJson(basketItems) {
      const items = [];
      for (const basketItem of basketItems) {
        items.push({ ...basketItem });
      }
      return items;
    }

    const serializedItems = serializeBasketItemsToJson(items); //basket.serializeBasketItemsToJson(items) as seen on vid

    expect(serializedItems).not.toBe(itemsSerializedToJson); // expected an instance of a class instead of an object literal

    expect(serializedItems).toEqual(itemsSerializedToJson); // toEqual matcher will recursively compare all properties of two objects
  });
});

describe("getBasketItem", () => {
  let events = [];
  let items = [];
  beforeEach(() => {
    events = [
      new Event(1, "A Night At The Proms", 2500.00, 2500, 2500),
      new Event(2, "Raging Machine", 35.00, 2500, 2500),
    ];
    items = [
      new BasketItem(events[0], 1),
      new BasketItem(events[1], 2),
    ];
  });
  test("Returns truth if event exists in the basket", () => {
    const basketItem = basket.getBasketItem(items, events[0]);

    expect(basketItem).toBeTruthy();

    expect(basketItem).not.toBeNull();
  });

  test("Returns falsy if event does not exist in the basket", () => {
    const basketItem = basket.getBasketItem(items, new Event(3, "Pop party!", 10.00, 25, 25));

    expect(basketItem).toBeFalsy(); //Test Passes if the returned value is a Falsy value. 

    expect(basketItem).toBeNull(); //Test Passes if the returned value is 'Null'
  })
});
