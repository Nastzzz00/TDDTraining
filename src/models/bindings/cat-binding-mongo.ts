import { IDBModel } from "../../commons/types";
import { Cat } from "../mongo-models";

const catModel: IDBModel<any> = {
  insert: async add => {},
  getById: async id => {
    const add: any = await Cat.findOne({ _id: id }).exec();
    if (!add._id) {
      throw new Error("No cat found");
    }
    return add;
  },
  getAll: async () => {
    const address: any = await Cat.find({}).exec();

    return address.map(u => ({
      id: u._id.toString(),
      name: u.name,
      lastname: u.lastname,
      breed: u.breed
    }));
  },
  deleteById: async id => {},
  updateById: async id => {}
};

export { catModel };
