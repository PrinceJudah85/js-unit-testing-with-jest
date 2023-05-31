//const {Purchase} = require('')

jest.mock(/*[Insert directory to function dependency looking to test]*/)
//jest.mock('../../js/users/account/purchaseHistory/purchaseHistory') => example given in video

function getPurchaseHistory(userId) {
  const url = new URL("/account/orders/history ", BASE_URL);
  url.searchParams.append("userId", userId);

  const request = new XMLHttpRequest();
  request.open("GET", url.toString());

  return request;
}

// function parsePurchaseResponse(purchaseData) {}

module.export = {
  getPurchaseHistory,
  //parsePurchaseResponse
};
