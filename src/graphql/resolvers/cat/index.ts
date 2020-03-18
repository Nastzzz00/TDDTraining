const catResolvers = {
  Query: {
    getCat: async (parent, { id }, { getCatById }, info) => {
      return getCatById(id);
    },

    cats: async (parent, args, { getAllCat }, info) => {
      return getAllCat();
    }
  },
  Mutation: {
    createCat: async (parent, { cat }, context, info) => {
      const { createCat } = context;

      const i = {
        name: cat.name,
        lastName: cat.lastName,
        breed: cat.breed
      };

      return await createCat(i);
    },
    updateCat: async (parent, { cat }, context, info) => {
      const { updateCat } = context;

      const i = {
        name: cat.name,
        lastName: cat.lastName,
        breed: cat.breed
      };

      return await updateCat(i);
    }
  }
};

export default catResolvers;
