import application from "../../src/server/Server";
import { Express } from "express";
const supertest = require("supertest");

describe("sign out", () => {
  let app: Express;
  beforeEach(() => {
    app = application.App;
  });
  it("should respond status 200", async () => {
    const response = await supertest(app).get("/api/v1/account/signout").expect(200);
  });
});
