import supertest from "supertest";
import app from "../../server";
import { expect } from "chai";
import tutorRoutes from "../../routes/tutorsRoutes";
import { Tutor, tutor } from "../mockdata/user";
import exp from "constants";

const mockTutor: Tutor = tutor;

describe("GET /tutors?id=1", () => {
  it("should return a json object.", async () => {
    const response = await supertest(app)
      .get("/tutors")
      .query({ id: 1 })
      .expect("Content-Type", /json/);
  });

  it("should return a status of 200", async () => {
    const response = await supertest(app)
      .get("/tutors")
      .query({ id: 1 })
      .expect(200);
  });

  it("should return the row with id = 1", async () => {
    const response = await supertest(app).get("/tutors").query({ id: 1 });

    expect(response.body.id).to.deep.equal(tutor.id);
  });

  it("should return an array when id is not provided", async () => {
    const response = await supertest(app).get("/tutors");

    expect(response.body).to.be.an("Array");
  });

  it("should return an array of length greater than 0", async () => {
    const response = await supertest(app).get("/tutors");

    expect(response.body.length).to.be.greaterThan(0);
  });

  it("should return 404 when the tutor is not found", async () => {
    const response = await supertest(app)
      .get("/tutors")
      .query({ id: 9728 })
      .expect(404);
  });

  it("should return an error message if tutor is not found", async () => {
    const response = await supertest(app).get("/tutors").query({ id: 9728 });

    expect(response.body).to.deep.equal({ error: "Tutor not found by id" });
  });
});
