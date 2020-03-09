import { updateUCCat } from "./update-cat-usecase";
const updateCat = updateUCCat();

describe("UseCase: Update a Cat ", () => {
  it("should be able to update a cat", () => {
    const catInput = {
      name: "Jonas",
      lastName: "Nepomuceno",
      breed: "Persian"
    };

    const oldValue = {
      name: "Jonas",
      lastName: "Nepomuceno",
      breed: "Persian"
    };
    const newCat = updateCat(catInput, oldValue);
    expect(newCat).toMatchObject(catInput);
  });
});
