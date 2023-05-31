const promotions = require("../../js/promotions/promotions");

describe("generateReferralCode", () => {
  test("Referral code contains userId", () => {
    const userId = "1234";
    const referralCode = promotions.generateReferralCode(userId);

    // Both of the matchers below will validate that the passed in string (userId) is a substring of the value returned by the generateReferralCoded();
    expect(referralCode).toContain(userId);
    expect(referralCode).toMatch(userId);
  });

  test("Referral code has correct format", () => {
    const userId = "1234";
    const referralCode = promotions.generateReferralCode(userId);

    expect(referralCode).toMatch(/#FRIEND-#\d+-#1234/);
  });

  test("Returns correct referral code", () => {
    const randomMock = jest.spyOn(global.Math, "random").mockReturnValue(76567); // spyOn method is essentially the same as using jest.fn

    const referralCode = promotions.generateReferralCode(234);

    expect(referralCode).toBe("#FRIEND-#567-#234");

    expect(randomMock).toHaveBeenCalled();
  });
});
