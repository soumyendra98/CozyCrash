const express = require("express");

const router = express.Router();

const panelController = require("../Controllers/Admin/Panel");

// Route to get List of all events
router.get("/events/getAll", panelController.getAllEvents);

// Route to get an event
router.get("/events/get/:id", panelController.getEvent);

// Route to create a new event
router.post("/events/create", panelController.createEvent);

// Route to edit a event
router.put("/events/edit/:id", panelController.editEvent);

// Route to get List of all Open Requests
router.get("/openRequests/getAll", panelController.getAllOpenRequests);

// Route to get a List of all Closed Requests 
router.get("/closedRequests/getAll", panelController.getAllClosedRequests);

// Route to get a  Request
router.get("/requests/get/:id", panelController.getRequest);

// Route to edit a Request
router.put("/requests/edit/:id", panelController.editRequest);

// Route to get a List of all Amenities
router.get("/amenities/getAll", panelController.getAllAmenities);

// Route to create a new Amenity
router.post("/amenities/create", panelController.createAmenity);

// Route to edit an Amenity
router.put("/amenities/edit/:id", panelController.editAmenity);

// Route to get an Amenity
router.get("/amenities/get/:id", panelController.getAmenity);

// Route to delete an Amenity
router.delete("/amenities/delete/:id", panelController.deleteAmenity);


module.exports = router;