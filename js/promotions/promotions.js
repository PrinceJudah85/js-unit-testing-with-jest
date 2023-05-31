const axios = require("axios");

/*
function calculatePercentageDiscount(percentage, miniumSpend, currentPrice) {
}

function calculateMoneyOff(discount, minimumSpend, currentPrice) {

}
*/

function generateReferralCode(userId) {
  const id = Math.random().toString().substring(2, 5)

  return `#FRIEND-#${id}--${userId}`;
}

/*
async function applyDiscount(discountCode, currentTotal) {

}
*/

module.exports = {
  generateReferralCode,
  //calculateMoneyOff,
  //calculatePercentageDiscount,
  //applyDiscount,
}