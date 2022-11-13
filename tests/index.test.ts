import axios from "axios";
import { getViacepResponse } from "../src/services/viaCepRequest";
const request = require("supertest");
const app = require("../src/app");
jest.mock("axios");

describe("Routes test", () => {
  it("Should get main route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toHaveProperty("message");
  });

  it("Should get the result of calculating the average of two numbers", async () => {
    const res = await request(app)
      .get("/media")
      .send({ num1: 8.75, num2: 7.55 });
    expect(res.body).toHaveProperty("result");
  });
});
