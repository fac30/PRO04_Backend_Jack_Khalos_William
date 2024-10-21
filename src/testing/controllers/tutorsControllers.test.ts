import supertest from "supertest";
import express from "express";
import {getTutorbyIdController} from "../../controllers/tutorsControllers"
import { expect } from "chai";
import { getTutorById } from "../../models/getTutor";
import tutorRoutes from "../../routes/tutorsRoutes"

const app: express.Application = express();
app.use("/tutors", tutorRoutes)
describe("GET /tutors?id=1",()=>{
    it("should return the tutor with id=1",async ()=>{
        const response = await supertest(app)
            .get("/tutors")
            .query({id: 1})
            .expect(200)

        expect(response.body).to.deep.equal({
            id: 1,
          full_name: "Itziar Cantero",
          email: "itziar.cantero@example.com",
          address: "456 Tutor St",
          postal_code: "54321",
          phone_number: "07700900002",
          description: "Hi! I’m Itziar and I’m so excited to start teaching Computer Science. I have a Master’s from MIT and like to sneak everywhere.",
          availability: '{"Monday": ["10:00-12:00", "14:00-16:00"], "Wednesday": ["10:00-12:00"], "Friday": ["14:00-16:00"]}',
          created_at: "2024-10-21 12:47:42",
          fk_subject_id: null,
          fk_tutortype_id: null,
          img_source: "https://images.unsplash.com/photo-1461039088886-b5c863279a0e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        });
    });

    it("should return all tutors when id is not provided", async ()=>{
        const response = await supertest(app)
            .get("/tutors")
            .expect(200);

        expect(response.body).to.be.an("Array");
        expect(response.body.length).to.be.greaterThan(0);
    })

    it("should return 404 when the tutor is not found", async ()=>{
        const response = await supertest(app)
            .get("/tutors")
            .query({id: 9728})
            .expect(404);
        
        expect(response.body).to.deep.equal({error: 'Tutor not found by id'})
    })
})
