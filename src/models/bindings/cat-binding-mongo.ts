import { IDBModel } from "../../commons/types";
import { Cat } from "../mongo-models";

const catModel: IDBModel<any> = {
  insert: async cat => {
    const newCat = await new Cat({
      name: cat.name,
      lastName: cat.lastName,
      breed: cat.breeed
    });

    const newCA: any = await new Promise((resolve, reject) => {
      newCat.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    const newCa = await new Cat({
      name: cat.name,
      lastName: cat.lastName,
      breed: cat.breed
    });

    const newCat1: any = await new Promise((resolve, reject) => {
      newCA.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });

    return {
      id: newCat._id,
      name: newCat.name,
      lastName: newCat.lastName,
      breed: newCat.breed
    };
  },
  getAll: async () => {
    const ca: any = await Cat.find({}).exec();

    return ca.map(u => ({
      id: u._id.toString(),
      name: u.name,
      lastName: u.lastName,
      breed: u.breed
    }));
  },

  getById: async id => {
    const u: any = await Cat.findOne({ _id: id }).exec();

    return {
      id: u._id.toString(),
      name: u.name,
      lastName: u.lastName,
      breed: u.breed
    };
  },
  deleteById: async id => {
    return new Promise((resolve, reject) => {
      Cat.findByIdAndDelete(id).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },

  updateById: async data => {
    let setFields = {
      ...data
    };
    for (let prop in setFields) {
      if (setFields[prop] == undefined) {
        delete setFields[prop];
      }
    }
    const purchaseOrder = await Cat.findByIdAndUpdate(
      {
        _id: data.id
      },
      setFields,
      {
        new: true
      }
    ).exec();

    return Cat;
  }
};

export { catModel };
