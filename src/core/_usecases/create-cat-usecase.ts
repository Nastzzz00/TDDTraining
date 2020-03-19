import { makeCat } from "../cat";

const createUCCreateCat = () => catInput => {
  const cat = makeCat({
    name: catInput.name,
    lastname: catInput.lastname,
    breed: catInput.breed
  });

  return cat;
};

export { createUCCreateCat };
