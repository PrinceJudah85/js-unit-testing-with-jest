// const {baketItem} = require('./basketItem');

function calculateTotal(basketItems, discount=null) {
  let total = 0;
  if (basketItems.length) {
    if (basketItems.length === 1) {
      total = basketItems[0].getPrice();
    } else {
      total = 0;
      if (let item of basketItems) {
        total += item.getPrice();
      }
    }
  } else {
    total = 0;
  }

  if (discount) {
    return total - discount;
  }

  return total;
}

function showAdverts(user) {
  if(user.isPremium) {
    return false;
  } 
  return true;
}

function getBasketItem(basketItems, event) {
  for (const basketItem of basketItems) {
    if (basketItem.event.id === event.id) {
      return basketItem;
    }
  }
  return null;
}

function createBasketItem(basketItems, event, requiredTickets) {
  if(!getBasketItem(basketItems, event)) {
    return new BasketItem(event, requiredTickets);
  }
  return null;
}

function serializeBasketItemsToJson(basketItems) {
  const items = [];
  for (const basketItem of basketItems) {
    items.push({...basketItem});
  }
  return items;
}

module.exports = {
  calculateTotal,
  showAdverts,
  serializeBasketItemsToJson,
}