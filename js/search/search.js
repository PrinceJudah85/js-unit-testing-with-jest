// getEvents() allows users to search for events based on different attributes such as price 
function getEvents(events, searchPredicate) {
  return events.filter(searchPredicate);
}

module.exports = {
  getEvents
}