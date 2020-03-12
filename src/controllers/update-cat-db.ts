import { IDBModel } from "../commons/types";
import { updateUCCat } from "../core/_usecases";

const updateCatByIDDB = (db: IDBModel<any>) => async data => {
  const a = await db.getById(data.id);
  const updateScheduleLine = updateUCCat();
  const newScheduleLine = updateScheduleLine(data, a);
  return db.updateById({ ...newScheduleLine, id: data.id });
};

export { updateCatByIDDB };
