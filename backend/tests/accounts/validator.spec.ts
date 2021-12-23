import Auth from "../../src/api/V1/accounts/validator/AccountValidator";
const auth = new Auth();

describe("validates account signin Data", () => {
  const testDTO1 = { email: "", password: "" };
  const testDTO2 = { email: "testemai@gmail.com", password: "" };
  const testDTO3 = { email: "", password: "nasakdsdaksds" };
  const testDTO4 = { email: "testemai@gmail.com", password: "nasakdsdaksds" };

  test("Trows exeption is data is incomplete", async () => {
    await expect(auth.ValidateSignInData(testDTO1)).rejects.toThrow();
    await expect(auth.ValidateSignInData(testDTO2)).rejects.toThrow();
    await expect(auth.ValidateSignInData(testDTO3)).rejects.toThrow();
  });
  test("Does not throw if data is complete", async () => {
    await expect(auth.ValidateSignInData(testDTO4)).resolves.not.toThrow();
  });
});
