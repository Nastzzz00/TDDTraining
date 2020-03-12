import { createCreateCatDB } from "./create-cat-db";

describe("Create Cat", () => {
  const mockDB: any = {
    insert: jest.fn(async input => {
      return { _id: "1", ...input };
    })
  };
  const createCat = createCreateCatDB(mockDB);

  it("should be able to save a cat in the DB", async () => {
    const given = {
      name: "Jonas",
      lastName: "Nepomuceno",
      breed: "Persian"
    };

    const newCat = await createCat(given);
    expect(mockDB.insert.mock.call.length).toBe(1);
    expect(newCat).toMatchObject({ _id: "1", ...given });
  });
});
