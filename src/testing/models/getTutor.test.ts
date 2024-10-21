import { assert } from "chai";
import { getTutorById } from '../../models/getTutor';

interface Tutor {
    id: number;
    created_at: string;
    full_name: string;
    email: string;
    address: string;
    postal_code: string;
    phone_number: string;
    description: string;
    availability: string| null;
    fk_subject_id: number | null;
    fk_tutortype_id: number | null;
    img_source: string | null;
  }

describe("getTutorById should return tutor with given id arguement.", ()=>{
    it("should return the tutor of id = 1", ()=>{
        const tutor: Tutor = {
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
        };

        assert.deepEqual(getTutorById(1), tutor)
    })
})