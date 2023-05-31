const {getEvents} = require('../../js/search/search');

describe("getEvents", () => {
  test("Returns events with ticket prices less than 30", () => {
    const searchPredicateMock = jest.fn(e => e.ticketPrice < 30);// => Mock Function

    const expectedEvent1 = new Event(1, "Pop goes Punk!", 20.00, 1000, 1000);
    const expectedEvent2 = new Event(4, "Party Like Its 1990!", 10.00, 1000, 1000);
    const expectedEvent3 = new Event(7, "Head Banging Tunes of the Noughties", 29.99, 1000, 1000);

    const events = [
      expectedEvent1,
      new Event(2, "The Music of The Elders", 70.00, 1000, 1000),
      new Event(3, "Glastonbury 2025", 250.00, 1000, 1000),
      expectedEvent2,
      new Event(5, "Radio Tunes Extravaganza", 50.00, 1000, 1000),
      new Event(6, "Jump Around", 30.01, 1000, 1000),
      expectedEvent3
    ];

    const filterResults = getEvents(events, searchPredicateMock);

    expect(filterResults).toEqual([
      expectedEvent1,
      expectedEvent2,
      expectedEvent3
    ])

    expect(searchPredicateMock).toHaveBeenCalled(); // Specific matcher for Mock functions

    expect(searchPredicateMock.mock.calls.length).toBe(7); // calls property logs every call to the mock

    expect(searchPredicateMock.mock.calls[0][0]).toBe(events[0]);// retrieves the First argument passed into the mock when the mock is first called
    expect(searchPredicateMock.mock.calls[1][0]).toBe(events[1]);// retrieves the First argument passed into the mock when the mock is called for the second time.
    expect(searchPredicateMock.mock.calls[2][0]).toBe(events[2]);// retrieves the First argument passed into the mock when the mock is called for the third time.
    expect(searchPredicateMock.mock.calls[3][0]).toBe(events[3]);// retrieves the First argument passed into the mock when the mock is called for the fourth time.
    expect(searchPredicateMock.mock.calls[4][0]).toBe(events[4]);// retrieves the First argument passed into the mock when the mock is called for the fifth time.
    expect(searchPredicateMock.mock.calls[5][0]).toBe(events[5]);// retrieves the First argument passed into the mock when the mock is called for the sixth time.
    expect(searchPredicateMock.mock.calls[6][0]).toBe(events[6]);// retrieves the First argument passed into the mock when the mock is called for the seventh time.
  });
});