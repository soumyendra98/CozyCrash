const Event = require("../../Models/Event");

const joinEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.event_id);
    if (event.current_count < event.capacity) {
      event.current_count += 1
      event.attendees.push(req.body.user_id);
      await event.save();
      res.status(200).json({
        message: "Successfully joined the event",
      });
    } else {
      res.status(400).json({
        message: "Event is full",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const leaveEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.event_id);
    if (event.current_count > 0) {
      event.current_count -= 1;
      event.attendees.pull(req.body.user_id);
      await event.save();
      res.status(200).json({
        message: "Successfully left the event",
      });
    } else {
      res.status(400).json({
        message: "Event is empty",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = { joinEvent, leaveEvent };
