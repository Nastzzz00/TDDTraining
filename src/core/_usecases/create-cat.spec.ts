import { createUCCreateCat } from "./create-cat-usecase";

const addCat = createUCCreateCat();

describe("Cat Create", () => {
  it("should create a cat", () => {
    const catInput = {
      name: "Jonas",
      lastname: "Nepomuceno",
      breed: "Persian"
    };

    const newCat = addCat(catInput);
    expect(newCat).toMatchObject(catInput);
  });
});
