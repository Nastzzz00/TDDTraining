import { makeCat } from "../cat";

const createUCCreateCat = () => catInput => {
  const cat = makeCat({
    name: catInput.name,
    lastName: catInput.lastName,
    breed: catInput.breed
  });

  return cat;
};

export { createUCCreateCat };
