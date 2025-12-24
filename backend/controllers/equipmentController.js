const Equipment = require("../models/Equipment");

exports.getAllEquipment = async (req, res) => {
  const equipment = await Equipment.find();
  res.json(equipment);
};

exports.addEquipment = async (req, res) => {
  const newEquipment = new Equipment(req.body);
  await newEquipment.save();
  res.status(201).json(newEquipment);
};

exports.updateEquipment = async (req, res) => {
  const updated = await Equipment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

exports.deleteEquipment = async (req, res) => {
  await Equipment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
