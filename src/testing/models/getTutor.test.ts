import { assert } from "chai";
import { getTutorById } from "../../models/getTutor";
import { Tutor, tutor } from "../mockdata/user";

describe("getTutorById should return tutor with given id arguement.", () => {
  it("should return the tutor of id = 1", () => {
    const mockTutor: Tutor = tutor;
    assert.deepEqual(getTutorById(1).id, mockTutor.id);
  });
});
