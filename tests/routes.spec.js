const { expect } = require("chai");
const app = require("supertest")(require("../server/index.js"));

describe("Routes", () => {
  describe("GET /api/:category", () => {
    it("returns an object", async () => {
      const data = await app.get("/api/sadcringe");
      expect(data.status).to.equal(200);
      expect(data.body).to.be.an("object");
    });
  });
});
