const getAllEvents = (req, res, next) => {
    Event.find()
        .then(events => {
            res.status(200).json({
                message: "Events fetched successfully!",
                events: events
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching events failed!"
            });
        });
    };

const getEvent = (req, res, next) => {
    Event.findById(req.params.id)
        .then(event => {
            if (event) {
                res.status(200).json(event);
            } else {
                res.status(404).json({ message: "Event not found!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching event failed!"
            });
        });
    }

const createEvent = (req, res, next) => {
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        creator: req.userData.userId
    });
    event.save()
        .then(createdEvent => {
            res.status(201).json({
                message: "Event added successfully",
                event: {
                    ...createdEvent,
                    id: createdEvent._id
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Creating an event failed!"
            });
        });
    }

const editEvent = (req, res, next) => {
    const event = new Event({
        _id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        creator: req.userData.userId
    });
    Event.updateOne({ _id: req.params.id, creator: req.userData.userId }, event)
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({ message: "Update successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Couldn't update event!"
            });
        });
    }

const getAllOpenRequests = (req, res, next) => {
    Request.find()
        .then(requests => {
            res.status(200).json({
                message: "Requests fetched successfully!",
                requests: requests
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching requests failed!"
            });
        });
    }

const getAllClosedRequests = (req, res, next) => {
    Request.find()
        .then(requests => {
            res.status(200).json({
                message: "Requests fetched successfully!",
                requests: requests
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching requests failed!"
            });
        });
    }

const getRequest = (req, res, next) => {
    Request.findById(req.params.id)
        .then(request => {
            if (request) {
                res.status(200).json(request);
            } else {
                res.status(404).json({ message: "Request not found!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching request failed!"
            });
        });
    }

const editRequest = (req, res, next) => {
    const request = new Request({
        _id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        creator: req.userData.userId
    });
    Request.updateOne({ _id: req.params.id, creator: req.userData.userId }, request)
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({ message: "Update successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Couldn't update request!"
            });
        });
    }

const getAllAmenities = (req, res, next) => {
    Amenity.find()
        .then(amenities => {
            res.status(200).json({
                message: "Amenities fetched successfully!",
                amenities: amenities
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching amenities failed!"
            });
        });
    }

const getAmenity = (req, res, next) => {
    Amenity.findById(req.params.id)
        .then(amenity => {
            if (amenity) {
                res.status(200).json(amenity);
            } else {
                res.status(404).json({ message: "Amenity not found!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching amenity failed!"
            });
        });
    }

const createAmenity = (req, res, next) => {
    const amenity = new Amenity({
        title: req.body.title,
        description: req.body.description,
        creator: req.userData.userId
    });
    amenity.save()
        .then(createdAmenity => {
            res.status(201).json({
                message: "Amenity added successfully",
                amenity: {
                    ...createdAmenity,
                    id: createdAmenity._id
                }
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Creating an amenity failed!"
            });
        });
    }

const editAmenity = (req, res, next) => {
    const amenity = new Amenity({
        _id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        creator: req.userData.userId
    });
    Amenity.updateOne({ _id: req.params.id, creator: req.userData.userId }, amenity)
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({ message: "Update successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Couldn't update amenity!"
            });
        });
    }

const deleteAmenity = (req, res, next) => {
    Amenity.deleteOne({ _id: req.params.id, creator: req.userData.userId })
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({ message: "Deletion successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Deleting amenities failed!"
            });
        });
    }

module.exports = { getAllEvents, getEvent, createEvent, editEvent, getAllOpenRequests, getAllClosedRequests, getRequest, editRequest, getAllAmenities, getAmenity, createAmenity, editAmenity, deleteAmenity };