const express = require("express");
const router = express.Router();

const PanelController = require("../../Controllers/User/Panel");
//Join a Event
router.post("/user/join-event/:event_id", PanelController.joinEvent);

// Leave a Event
router.post("/user/leave-event/:event_id", PanelController.leaveEvent);

module.exports = router;
