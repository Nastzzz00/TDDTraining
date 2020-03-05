export type TCat = {
  name: string;
  lastName: string;
  breed: string;
};

const createMakeCat = () => (cat): TCat => {
  const { name, lastName, breed } = cat;
  if (!name) {
    throw new Error("Name is required!");
  }
  if (!lastName) {
    throw new Error("lastName is required!");
  }
  if (!breed) {
    throw new Error("breed is required!");
  }
  return {
    name: name,
    lastName: lastName,
    breed: breed
  };
};

export { createMakeCat };
