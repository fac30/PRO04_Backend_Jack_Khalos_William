// test/tutorControllers.test.js
import express from "express";
import supertest from "supertest";
import { expect } from "chai";
import {
  createTutorAvailabilityController,
  bookSessionController,
  getSessionsByTutorIdController,
} from "../../controllers/sessionsControllers";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json()); // Parse JSON bodies

// Set up your routes for testing
app.post("/api/tutor/availability", createTutorAvailabilityController);
app.post("/api/tutor/book", bookSessionController);
app.get("/api/tutor/sessions", getSessionsByTutorIdController);

describe("Tutor Controllers", () => {
  describe("POST /api/tutor/availability", () => {
    it("should create tutor availability when valid data is provided", async () => {
      const response = await supertest(app)
        .post("/api/tutor/availability")
        .send({ dateTime: "2024-10-22T10:00:00Z", tutorID: 1 });

      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal(
        "Tutor availability created successfully"
      );
    });

    it("should return 400 when dateTime or tutorID is missing", async () => {
      const response = await supertest(app)
        .post("/api/tutor/availability")
        .send({ dateTime: "2024-10-22T10:00:00Z" }); // Missing tutorID

      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal("Please enter a date and time");
    });
  });

  describe("POST /api/tutor/book", () => {
    it("should book a session when valid data is provided", async () => {
      // Mock the findSession and bookSession functions to return a session
      // You can use a library like sinon for mocking or stubbing functions
      // Assume a session with booking_status = "available"
      const response = await supertest(app)
        .post("/api/tutor/book")
        .send({ dateTime: "2024-10-22T10:00:00Z", tutorID: 1 });

      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal("Session booked");
    });

    it("should return 404 when session is not found", async () => {
      const response = await supertest(app)
        .post("/api/tutor/book")
        .send({ dateTime: "2024-10-22T10:00:00Z", tutorID: 1 });

      expect(response.status).to.equal(404);
      expect(response.body.message).to.include("No session found for time");
    });

    it("should return 401 when session is already booked", async () => {
      const response = await supertest(app)
        .post("/api/tutor/book")
        .send({ dateTime: "2024-10-22T10:00:00Z", tutorID: 1 });

      expect(response.status).to.equal(401);
      expect(response.body.message).to.equal("Session is already booked");
    });
  });

  describe("GET /api/tutor/sessions", () => {
    it("should return sessions when a valid tutorId is provided", async () => {
      const response = await supertest(app)
        .get("/api/tutor/sessions")
        .send({ tutorId: 1 });

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array"); // Assuming sessions are returned as an array
    });

    it("should return 404 when no sessions are found", async () => {
      const response = await supertest(app)
        .get("/api/tutor/sessions")
        .send({ tutorId: 999 }); // Assuming no tutor with ID 999

      expect(response.status).to.equal(404);
      expect(response.body.message).to.equal(
        "No sessions found, does this tutor exist?"
      );
    });
  });
});
