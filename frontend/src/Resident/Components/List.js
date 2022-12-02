import React from "react";
import Event from "./Event";

function List({ events }) {
  return (
    <div>
      {events.map((event) => {
        return <Event key={event._id} event={event} />;
      })}
    </div>
  );
}

export default List;
