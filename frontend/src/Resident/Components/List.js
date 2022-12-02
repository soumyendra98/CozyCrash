import React from "react";
import Event from "./Event";

function List({ events, user_id, userRegistrationStatus }) {
  return (
    <div>
      {events.map((event) => {
        const registered = event.attendees.includes(user_id)
        return <Event userRegistrationStatus={userRegistrationStatus} registered={registered} key={event._id} event={event} />;
      })}
    </div>
  );
}

export default List;
