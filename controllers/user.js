const service = require("../services/user");

const getAll = async (req, res) => {
  res.send(await service.getAll());
};
const get = (req, res) => {
  res.send(service.getUser(parseInt(req.params.id)));
  service.get();
};
const save = async (req, res) => {
  //check first for valid input
  //check if already exists
  //add
  console.log("body: ", req.body);
  const serviceResponse = await service.save(req.body);
  res.send(serviceResponse);
};
const update = (req, res) => {
  //check first for valid input
  //check if already exists
  //update
  service.update();
};
const deleteOne = (req, res) => {
  //check if exists
  //delete
  service.deleteOne();
};

module.exports = {
  getAll,
  get,
  save,
  update,
  deleteOne,
};
