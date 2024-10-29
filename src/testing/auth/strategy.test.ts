import supertest from "supertest";
import app from "../../server";
import { expect } from "chai";

describe("passport should respond with bad user inputs and a json object if user successfuly logs in", () => {
  it("should return a status 200 on success", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.com", password: "ww" })
      .expect(200);
  });

  it("should respond with a json object", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.com", password: "ww" })
      .expect("Content-Type", /json/);
  });

  it("should respond with a json with properties id, email and name", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.com", password: "ww" });

    expect(response.body).to.be.an("object");
    expect(response.body).to.have.property("id");
    expect(response.body).to.have.property("email");
    expect(response.body).to.have.property("name");
  });

  it("should respond with status 400 if email is empty", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "", passport: "ww" })
      .expect(400);
  });
  it("should respond with status 400 if pw is empty", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.com", passport: "" })
      .expect(400);
  });
  it("should respond with html object if no user found", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.co", password: "ww" });

    expect(response.headers["content-type"]).to.match(/html/);
    expect(response.text).to.include("Error: User not found.");
  });

  it("should respond with the error message from the strategy if no user found", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.co", password: "ww" });

    expect(response.text).to.include("Error: User not found.");
  });

  it("should respond with the error message from the strategy if incorrect password", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.com", password: "wm" });

    expect(response.text).to.include("Error: Invalid password.");
  });
  it("should respond with error if password is empty", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.co", password: "" })
      .expect(400);
  });
  it("should show passport with user email is created in session with serializer", async () => {
    const response = await supertest(app)
      .post("/auth/login")
      .send({ email: "will@zubi.com", password: "ww" });

    const sessionCookie = response.headers["set-cookie"];

    const isCookie = Array.isArray(sessionCookie)
      ? sessionCookie.find((cookie) => cookie.startsWith("connect.sid"))
      : sessionCookie;

    expect(sessionCookie).to.exist;
  });
});
