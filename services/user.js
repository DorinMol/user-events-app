const Model = require("../models/user");

const getAll = () => Model.find();
const get = (user) => Model.findById(user._id);
const save = (user) => Model.create(user);
const update = (user) => Model.findByIdAndUpdate(user._id, user);
const deleteOne = (user) => Model.deleteOne(user._id);

module.exports = {
  getAll,
  get,
  save,
  update,
  deleteOne,
};
