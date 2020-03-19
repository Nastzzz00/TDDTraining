import { createTestClient } from "apollo-server-testing";
import gql from "graphql-tag";
import mockData from "../mocks/mock-data";
import * as controllers from "../../controllers";
import { constructTestServer } from "../__utils";

const {
  //Generic
  getAllDataDB,
  getByIDDB,

  //cat
  createCreateCatDB,
  updateCatByIDDB
} = controllers;

const userMock = {
  insert: jest.fn(async input => {
    return { id: "1", ...input };
  }),
  getById: jest.fn(async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.cat.filter(filterData);

    return res[0] || null;
  }),
  getAll: jest.fn(async () => {
    return mockData.cat;
  }),
  updateById: jest.fn(async input => {
    return { ...input };
  }),
  deleteById: async id => {
    const filterData = data => {
      if (data.id === id) {
        return data;
      }
    };
    const res = mockData.cat.filter(filterData);
    return res[0] || null;
  }
  // getAllBySupplierStatus: async id => {},
  // getAllByItem: async id => {},
  // getAllByScheduleLine: async id => {},
  // updateSupplierStatusItemById: async id => {},
  // updateAdminStatusPurchaseOrderById: async id => {},
};

const { server }: any = constructTestServer({
  context: {
    getAllCat: getAllDataDB(userMock),
    getCatById: getByIDDB(userMock),
    createCat: createCreateCatDB(userMock),
    updateCat: updateCatByIDDB(userMock)
  }
});

describe("Tests", () => {
  //Queries
  it("should fetch all cat", async () => {
    const CAT_ALL = gql`
      query {
        cats {
          id
          name
          lastname
          breed
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({ query: CAT_ALL });

    expect(res).toMatchSnapshot();
  });

  it("should fetch one cat", async () => {
    const SINGLE_CAT = gql`
      query u($id: String!) {
        getCat(id: $id) {
          id
          name
          lastname
          breed
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_CAT,
      variables: { id: "1" }
    });

    expect(res).toMatchSnapshot();
  });

  it("should error when no cat", async () => {
    const SINGLE_CAT = gql`
      query u($id: String!) {
        getCat(id: $id) {
          id
          name
          lastname
          breed
        }
      }
    `;

    const { query } = createTestClient(server);
    const res = await query({
      query: SINGLE_CAT,
      variables: { id: "" }
    });

    expect(res).toMatchSnapshot();
  });

  //Mutations

  it("should create a cat", async () => {
    const CREATE_CAT = gql`
      mutation createCat($cat: CreateCatInput!) {
        createCat(cat: $cat) {
          id
          name
          lastname
          breed
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_CAT,
      variables: {
        cat: {
          name: "Jonas",
          lastname: "Nepomuceno",
          breed: "PERSIAN"
        }
      }
    });

    expect(res.errors).toBeUndefined();
    expect(userMock.insert.mock.calls.length).toBe(1);
    expect(res.data).toMatchObject({
      createCat: {
        name: "Jonas",
        lastname: "Nepomuceno",
        breed: "PERSIAN"
      }
    });
    expect(res).toMatchSnapshot();
  });

  // it('should delete a user', async () => {
  //   const DELETE_USER = gql`
  //     mutation u($id: ID!) {
  //       deleteUser(id: $id) {
  //         id
  //       }
  //     }
  //   `;
  //   const { mutate } = createTestClient(server);
  //   const res = await mutate({
  //     mutation: DELETE_USER,
  //     variables: { id: 'U1' },
  //   });
  //   expect(res.errors).toBeUndefined();
  //   expect(res).toMatchSnapshot();
  // });

  it("should update a cat", async () => {
    const UPDATE_CAT = gql`
      mutation u($cat: UpdateCatInput!) {
        updateCat(cat: $cat) {
          id
          name
          lastname
          breed
        }
      }
    `;

    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: UPDATE_CAT,
      variables: {
        updateCat: {
          id: "1",
          name: "Jonas",
          lastname: "Nepomuceno",
          breed: "PUSAKAL"
        }
      }
    });

    expect(res).toMatchSnapshot();
  });
});
