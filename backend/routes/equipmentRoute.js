const express = require("express");
const router = express.Router();
const controller = require("../controllers/equipmentController");

router.get("/", controller.getAllEquipment);
router.post("/", controller.addEquipment);
router.put("/:id", controller.updateEquipment);
router.delete("/:id", controller.deleteEquipment);

module.exports = router;
