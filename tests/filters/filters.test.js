const {today, next7Days, next30Days} = require('../../js/filters');
const {Event} = require('../../js/event/event');

describe('Test Today Filter', () => {

  test("Test today filter returns true", () => {
    const now = new Date(2022, 11, 15, 12, 30);
    const eventDate = new Date(2022, 11, 15, 19, 45);

    jest.useFakeTimers().setSystemTime(now);

    const event = new Event(243, "All Out Hits!", 20.44, 1000, 950, eventDate);

    expect(today(event)).toBe(true);
  });

  test("Test today filter returns false when in the past", () => {
    const now = new Date(2022, 11, 15, 12, 30);
    const eventDate = new Date(2022, 11, 14, 19, 45);

    jest.useFakeTimers().setSystemTime(now);

    const event = new Event(243, "All Out Hits!", 20.44, 1000, 950, eventDate);

    expect(today(event)).toBe(false);
  });

  test("Test today filter returns false when in the future", () => {
    const now = new Date(2022, 11, 15, 12, 30);
    const eventDate = new Date(2022, 11, 16, 19, 45);

    jest.useFakeTimers().setSystemTime(now);

    const event = new Event(243, "All Out Hits!", 20.44, 1000, 950, eventDate);

    expect(today(event)).toBe(false); // confirm line
  });
})