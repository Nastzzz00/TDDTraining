export type TCat = {
  name: string;
  lastname: string;
  breed: string;
};

const createMakeCat = () => (cat): TCat => {
  const { name, lastname, breed } = cat;
  if (!name) {
    throw new Error("Name is required!");
  }
  if (!lastname) {
    throw new Error("lastName is required!");
  }
  if (!breed) {
    throw new Error("breed is required!");
  }
  return {
    name: name,
    lastname: lastname,
    breed: breed
  };
};

export { createMakeCat };
