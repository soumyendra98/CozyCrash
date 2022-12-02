import React, { useE, useState } from "react";
import moment from "moment";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import styles from "./Event.module.css";
import { useSelector } from "react-redux";

export default function Event({ event, registered,userRegistrationStatus }) {
  const [register,setRegister] = useState(registered)
  const { user: authUser } = useSelector((x) => x.auth);
  const handleRegister = () => {
    if(register){
      fetch(
        `${process.env.REACT_APP_API_URL}/user/leave-event/${encodeURIComponent(event._id)}`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authUser.token}`
          },
          body: JSON.stringify({user_id: authUser.user._id})
        }
      ).then((response) => {
        if(response.status === 200){
          setRegister(false)
        }
        userRegistrationStatus(register)
      });
    }else{
    fetch(
      `${process.env.REACT_APP_API_URL}/user/join-event/${encodeURIComponent(event._id)}`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authUser.token}`
        },
        body: JSON.stringify({user_id: authUser.user._id})
      }
    ).then((response) => {
      if(response.status === 200){
        setRegister(true)
      }
      userRegistrationStatus(register)
    });
  }
  };

  return (
    <MDBCard alignment="center" style={{ margin: "20px" }}>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{event.title}</MDBCardTitle>
        <MDBCardText>{event.description}</MDBCardText>
        <MDBBtn href="#" onClick={handleRegister } value={register}>
          {register ? 'Unregister' : 'Register'}
        </MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className="text-muted">
        {moment(event.date).format("MMMM Do YYYY")}
      </MDBCardFooter>
    </MDBCard>
  );
}
