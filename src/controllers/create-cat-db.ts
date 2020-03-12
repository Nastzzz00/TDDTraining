import { IDBModel } from "../commons/types";
import { createUCCreateCat } from "../core/";

const createCreateCatDB = (db: IDBModel<any>) => async ca => {
  const createCat = createUCCreateCat();
  const newCat = createCat(ca);
  return db.insert(newCat);
};

export { createCreateCatDB };
