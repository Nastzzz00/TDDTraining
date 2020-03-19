import { createCreateCatDB } from "./create-cat-db";

describe("Create Cat", () => {
  it("Should be able to save a cat to a database", async () => {
    const mockDB: any = {
      insert: jest.fn(async input => {
        return { _id: "1", ...input };
      })
    };
    const createCat = createCreateCatDB(mockDB);

    const cat123 = {
      _id: "1",
      name: "Jonas",
      lastname: "Nepomuceno",
      breed: "Persian"
    };

    const newCat = await createCat(cat123);

    expect(mockDB.insert.mock.calls.length).toBe(1);
    expect(newCat).toMatchObject({ _id: "1", ...cat123 });
  });
});
