// const purchaseHistory = require('');
// const users = require('');

// class Purchase {}

// async function isValidUserName(username) {}

// async function createAccount(username) {}

function getPastPurchases(userId) {
  const purchases = purchaseHistory.getPurchaseHistory(userId);
  if (purchases.readyState === 4) {
    return purchases.response.events;
  } else {
    throw Error("Failed to get purchase history");
  }
}

module.exports = {
  Purchase,
  //createAccount,
  //isValidUserName,
  //getPastPurchases
};
