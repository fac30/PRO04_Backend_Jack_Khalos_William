import sum from "./sum";
import { assert } from "chai";

describe.skip("sum function returns the sum of 2 numbers", ()=>{
    it("should return 3 if args are 1 and 2",()=>{
        assert.equal(sum(1,2), 3)
    })
})