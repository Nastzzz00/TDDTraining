import { getAllDataDB, getByIDDB } from "./retrieve-data-db";

const mockCat = [
  {
    _id: "1",
    name: "Jonas",
    lastname: "Nepomuceno",
    breed: "Persian"
  }
];

describe("Retrieve Cat", () => {
  it("Should be able to return all cat from db", async () => {
    const mockDB: any = {
      getAll: jest.fn(async () => {
        return [...mockCat];
      })
    };

    const getAllCat = getAllDataDB(mockDB);
    const allCat = await getAllCat();
    expect(mockDB.getAll.mock.calls.length).toBe(1);
    expect(allCat).toMatchObject(mockCat);
  });

  it("Should be able to return one cat from db", async () => {
    const oneCat = [mockCat[0]];
    const mockDB: any = {
      getById: jest.fn(async id => {
        const filterCat = cust => {
          if (cust._id === id) {
            return cust;
          }
        };

        return mockCat.filter(filterCat);
      })
    };

    const getOneCat = getByIDDB(mockDB);
    const cat = await getOneCat("1");
    expect(mockDB.getById.mock.calls.length).toBe(1);

    expect(cat).toMatchObject(oneCat);
  });
});
