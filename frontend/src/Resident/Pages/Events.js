import React, { useEffect, useState } from "react";
import Scroll from "../Components/Scroll";
import List from "../Components/List";
import { useSelector } from "react-redux";

function UserEvents() {
  const { user: authUser } = useSelector((x) => x.auth);
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    fetch(
      `${process.env.REACT_APP_API_URL}/events/getAll/${encodeURIComponent(
        authUser.user.society_ids[0]
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setEvents(data.events);
        });
      }
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Scroll>
      <List events={events}></List>
    </Scroll>
  );
}

export { UserEvents };
