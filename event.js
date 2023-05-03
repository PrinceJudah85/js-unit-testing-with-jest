class Event {
  constructor(id, name, ticketPrice, totalTickets, ticketsRemaining) {
    this.id = id;
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.totalTickets = totalTickets;
    this.ticketsRemaining = ticketsRemaining;
  }
}

function isSoldOut(event) {
  return event.ticketsRemaining == 0;
}

function getTagLine(event, minimumTicketCount, isPopular) {
  if (isSoldOut(event)) {
    return "Event is Sold Out!";
  } else if (event.ticketsRemaining < minimumTicketCount) {
    let ticket = event.ticketsRemaining === 1 ? "ticket" : "tickets";
    return `Hurry only ${event.ticketsRemaining} ${ticket} left!`;
  } else {
    if (isPopular) {
      return "This Event is getting a lot of interest. Don't miss out!";
    }
    return "Don't miss out. Purchase your ticket now!";
  }
}

// function createEvent(name, price, availableTickets) {
//   if (typeof name !== "string" || name.length >= 200) {
//     throw new InvalidEventNameError("Event name cannot exceed 200 characters.")
//   }
// }

module.exports = {
  getTagLine: getTagLine,
  Event: Event
};