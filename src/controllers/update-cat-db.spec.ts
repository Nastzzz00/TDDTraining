import { updateCatByIDDB } from "./update-cat-db";

const mockCat = [
  {
    _id: "1",
    name: "Jonas",
    lastname: "Nepomuceno",
    breed: "Persian"
  }
];

describe("Update Cat", () => {
  const mockDb: any = {
    updateById: jest.fn(async input => {
      return { ...input };
    }),
    getById: jest.fn(async id => {
      const filterMock = data => {
        if (data._id === id) {
          return data;
        }
      };

      return mockCat.filter(filterMock);
    })
  };
  const updateCat = updateCatByIDDB(mockDb);

  it("should be able to update a cat in the DB", async () => {
    const given = {
      name: "Jonas",
      lastname: "Nepomuceno",
      breed: "Persian"
    };

    const newData = await updateCat(given);

    expect(mockDb.getById.mock.calls.length).toBe(1);
    expect(mockDb.updateById.mock.calls.length).toBe(1);
    expect(newData).toMatchObject(given);
  });
});
