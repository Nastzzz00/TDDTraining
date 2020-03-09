import { makeCat } from "../cat";

const updateUCCat = () => (catInput, oldValue) => {
  return makeCat(catInput);
};

export { updateUCCat };
