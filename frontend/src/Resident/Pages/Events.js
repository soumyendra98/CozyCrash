import React, { useEffect, useState } from "react";
import Scroll from "../Components/Scroll";
import List from "../Components/List";
import { useSelector } from "react-redux";
import Select from 'react-select';

function UserEvents() {
  const { user: authUser } = useSelector((x) => x.auth);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([])
  const [registered, setRegistered] = useState(false)
  const options = [{label: 'All', value:false},{label: 'Registered', value:true}]

  const handleRegistrationChange = (e) =>{
    setRegistered(e.value)
    
    if(registered){   
      console.log(registered)   
      setFilteredEvents(events.filter((event)=>{
        if(event.attendees.includes(authUser.user._id)){
          return event
        }else{
          return false
        }
      }))
    }else{
      setFilteredEvents([])
    }
    console.log(filteredEvents)
  }

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
          setFilteredEvents(data.events)
        });
      }
    });
  };

  const handleUserRegistrationStatus = (register) => {
    setRegistered(register)
  }

  useEffect(() => {
    getEvents();
  }, [List, registered]);

  return (
    <Scroll>
      <Select options={options} onChange={handleRegistrationChange} defaultValue={options[0]}/>
      <List user_id={authUser.user._id} events={registered ? filteredEvents : events} userRegistrationStatus={handleUserRegistrationStatus}></List>
    </Scroll>
  );
}

export { UserEvents };
