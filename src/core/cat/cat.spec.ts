import { createMakeCat } from "./cat";

const makeCat = createMakeCat();

describe("Cat", () => {
  it("must have a name", () => {
    const cat = {
      name: "",
      lastName: "Brothers",
      breed: "Pusakal"
    };

    expect(() => makeCat(cat)).toThrow("Name is required!");
  });
  it("must have a lastName", () => {
    const cat = {
      name: "Jonas",
      lastName: "",
      breed: "Pusakal"
    };

    expect(() => makeCat(cat)).toThrow("lastName is required!");
  });

  it("must have a breed", () => {
    const cat = {
      name: "Jonas",
      lastName: "Brothers",
      breed: ""
    };

    expect(() => makeCat(cat)).toThrow("breed is required!");
  });
});
