import supertest from "supertest";
import express from "express";
import { expect } from "chai";
import tutorRoutes from "../../routes/tutorsRoutes";
import { Tutor, tutor } from "../mockdata/user";

const app: express.Application = express();
const mockTutor: Tutor = tutor;
app.use("/tutors", tutorRoutes);
describe("GET /tutors?id=1", () => {
  it("should return the tutor with id=1", async () => {
    const response = await supertest(app)
      .get("/tutors")
      .query({ id: 1 })
      .expect(200);

    expect(response.body).to.deep.equal(tutor);
  });

  it("should return all tutors when id is not provided", async () => {
    const response = await supertest(app).get("/tutors").expect(200);

    expect(response.body).to.be.an("Array");
    expect(response.body.length).to.be.greaterThan(0);
  });

  it("should return 404 when the tutor is not found", async () => {
    const response = await supertest(app)
      .get("/tutors")
      .query({ id: 9728 })
      .expect(404);

    expect(response.body).to.deep.equal({ error: "Tutor not found by id" });
  });
});
