const catResolvers = {
  Query: {
    cats: () => Cat.find(),

    async getCat(_, { id }) {
      return await Cat.findById(id);
    },
    getBreed: () => Cat.find({ breed: "PUSAKAL" }),

    getBreeds: () => Cat.find({ breed: "PERSIAN" })
  },
  Mutation: {
    createCat: async (_, { input }) => {
      const kitty = new Cat(input);
      await kitty.save();
      return kitty;
    },
    deleteCat: async (_, { id }) => {
      return await Cat.findByIdAndRemove(id);
    },
    updateCat: async (_, { input }) => {
      return await Cat.findOneAndUpdate(
        { _id: input.id },
        { ...input },
        { new: true }
      );
    }
  }
};

export default catResolvers;
