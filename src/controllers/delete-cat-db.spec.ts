import { DeleteRecordByIDDB } from "./delete-data-db";

const mockCat = [
  {
    _id: "1",
    name: "Jonas",
    lastname: "Nepomuceno",
    breed: "Persian"
  }
];

describe("Delete Cat", () => {
  it("Should be able to delete a cat by ID in DB", async () => {
    const oneData = [mockCat[0]];
    const mockDB: any = {
      deleteById: jest.fn(async id => {
        const filterMock = data => {
          if (data._id === id) {
            return data;
          }
        };

        return mockCat.filter(filterMock);
      })
    };
    const getOneData = DeleteRecordByIDDB(mockDB);
    const data = await getOneData("1");
    expect(mockDB.deleteById.mock.calls.length).toBe(1);

    expect(data).toMatchObject(oneData);
  });
});
