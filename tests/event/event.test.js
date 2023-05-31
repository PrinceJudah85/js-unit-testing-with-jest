const { Event, getTagLine } = require("../../js/event/event");

test("Returns Sold Out tagline when no tickets left", () => {
  const event = new Event(1, "Summer BBQ", 40.0, 100, 0);
  const tagLine = getTagLine(event, 10, true);

  expect(tagLine).toBe("Event is Sold Out!");
});

describe("createEvent", () => {
  test("Throws an error when name is not a string", () => {
    expect(() => createEvent(1, 25.0, 200)).toThrow(); //Not specific to any error thrown (a catch all)
    expect(() => createEvent(1, 25.0, 200)).toThrow(/Event name/); //Regular expression that looks for specific substrings inside the thrown error string
    expect(() => createEvent(1, 25.0, 200)).toThrow("name"); //Unique substring found specifically in that error thrown string.
    expect(() => createEvent(1, 25.0, 200)).toThrow(InvalidEventNameError); //Name of the error thrown
    expect(() => createEvent(1, 25.0, 200)).toThrow(
      new InvalidEventNameError("Event name cannot exceed 200 characters")
    ); //create an instance of the error type with the expected error message
  });

  test("Throws error when name exceeds limit", () => {
    const name = "longEventName".repeat(20).substring(0, 201);
    expect(() => createEvent(name, 25.0, 200)).toThrow(
      new InvalidEventNameError("Event name cannot exceed 200 characters")
    );
  });
});
