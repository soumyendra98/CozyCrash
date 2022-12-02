const Event = require("../../Models/event");
const Request = require("../../Models/request");
const Amenity = require("../../Models/amenity");

// Get all events
const getAllEvents = (req, res) => {
  Event.find({ society_id: req.params.society_id })
    .then((events) => {
      res.status(200).json({
        message: "Events fetched successfully!",
        events: events,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching events failed!",
      });
    });
};

// Get Event by ID
const getEvent = (req, res) => {
  Event.findById(req.params.id)
    .then((event) => {
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: "Event not found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching event failed!",
      });
    });
};

// Create Event
const createEvent = (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    timings: {
      start: {
        hours: req.body.timings.start.hours,
        minutes: req.body.timings.start.minutes,
        seconds: req.body.timings.start.seconds,
      },
      end: {
        hours: req.body.timings.end.hours,
        minutes: req.body.timings.end.minutes,
        seconds: req.body.timings.end.seconds,
      },
    },
    venue: req.body.venue,
    society_id: req.body.society_id,
    capacity: req.body.capacity,
    cost: req.body.cost,
    isPetFriendly: req.body.isPetFriendly,
    // attendees: [],
  });
  event
    .save()
    .then((createdEvent) => {
      res.status(201).json({
        message: "Event added successfully",
        event: {
          ...createdEvent,
          id: createdEvent._id,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Creating an event failed!",
      });
    });
};

// Edit Event by ID
const editEvent = (req, res) => {
  const event = new Event({
    _id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: {
      start: {
        hours: req.body.time.start.hours,
        minutes: req.body.time.start.minutes,
        seconds: req.body.time.start.seconds,
      },
      end: {
        hours: req.body.time.end.hours,
        minutes: req.body.time.end.minutes,
        seconds: req.body.time.end.seconds,
      },
    },
    venue: req.body.venue,
    society_id: req.userData.society_id,
    capacity: req.body.capacity,
    cost: req.body.cost,
    isPetFriendly: req.body.isPetFriendly,
  });
  Event.updateOne({ _id: req.params.id }, event)
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Couldn't update event!",
      });
    });
};

// Delete Event by ID
const deleteEvent = (req, res) => {
  Event.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Deleting event failed!",
      });
    });
};

// Get All Requests which are In Progress or Pending
const getAllOpenRequests = (req, res) => {
  Request.find({ status: { $ne: "Completed" } })
    .then((requests) => {
      res.status(200).json({
        message: "Requests fetched successfully!",
        requests: requests,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching requests failed!",
      });
    });
};

// Get All Requests which are Completed
const getAllClosedRequests = (req, res) => {
  Request.find({ status: "Completed" })
    .then((requests) => {
      res.status(200).json({
        message: "Requests fetched successfully!",
        requests: requests,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching requests failed!",
      });
    });
};

// Get Request by ID
const getRequest = (req, res) => {
  Request.findById(req.params.id)
    .then((request) => {
      if (request) {
        res.status(200).json(request);
      } else {
        res.status(404).json({ message: "Request not found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching request failed!",
      });
    });
};

// Edit Request by ID
const editRequest = (req, res) => {
  const request = new Request({
    _id: req.body.id,
    society_id: req.userData.society_id,
    user_id: req.body.user_id,
    category: req.body.category,
    status: req.body.status,
    isEmergency: req.body.isEmergency,
    description: req.body.description,
  });
  Request.updateOne({ _id: req.params.id }, request)
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Couldn't update request!",
      });
    });
};

// Get All Amenities
const getAllAmenities = (req, res) => {
  Amenity.find()
    .then((amenities) => {
      res.status(200).json({
        message: "Amenities fetched successfully!",
        amenities: amenities,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching amenities failed!",
      });
    });
};

// Get Amenity by ID
const getAmenity = (req, res) => {
  Amenity.findById(req.params.id)
    .then((amenity) => {
      if (amenity) {
        res.status(200).json(amenity);
      } else {
        res.status(404).json({ message: "Amenity not found!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching amenity failed!",
      });
    });
};

// Add Amenity
const createAmenity = (req, res) => {
  const amenity = new Amenity({
    name: req.body.name,
    society_id: req.userData.society_id,
    timings: {
      start: {
        hours: req.body.timings.start.hours,
        minutes: req.body.timings.start.minutes,
        seconds: req.body.timings.start.seconds,
      },
      end: {
        hours: req.body.timings.end.hours,
        minutes: req.body.timings.end.minutes,
        seconds: req.body.timings.end.seconds,
      },
    },
    capacity: req.body.capacity,
    description: req.body.description,
    isSmoking: req.body.isSmoking,
    isPetFriendly: req.body.isPetFriendly,
  });
  amenity
    .save()
    .then((createdAmenity) => {
      res.status(201).json({
        message: "Amenity added successfully",
        amenity: {
          ...createdAmenity,
          id: createdAmenity._id,
        },
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Creating an amenity failed!",
      });
    });
};

// Edit Amenity by ID
const editAmenity = (req, res) => {
  const amenity = new Amenity({
    _id: req.body.id,
    name: req.body.name,
    society_id: req.userData.society_id,
    timings: {
      start: {
        hours: req.body.timings.start.hours,
        minutes: req.body.timings.start.minutes,
        seconds: req.body.timings.start.seconds,
      },
      end: {
        hours: req.body.timings.end.hours,
        minutes: req.body.timings.end.minutes,
        seconds: req.body.timings.end.seconds,
      },
    },
    capacity: req.body.capacity,
    description: req.body.description,
    isSmoking: req.body.isSmoking,
    isPetFriendly: req.body.isPetFriendly,
  });
  Amenity.updateOne({ _id: req.params.id }, amenity)
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Couldn't update amenity!",
      });
    });
};

// Delete Amenity by ID
const deleteAmenity = (req, res) => {
  Amenity.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Deleting amenities failed!",
      });
    });
};

module.exports = {
  getAllEvents,
  getEvent,
  createEvent,
  editEvent,
  deleteEvent,
  getAllOpenRequests,
  getAllClosedRequests,
  getRequest,
  editRequest,
  getAllAmenities,
  getAmenity,
  createAmenity,
  editAmenity,
  deleteAmenity,
};
