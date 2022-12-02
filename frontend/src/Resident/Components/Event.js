import React, { useE } from "react";
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
import "./Event.module.css";

export default function Event({ event }) {
  const handleRegister = () => {
    console.log("Registering for event");
  };
  return (
    <MDBCard alignment="center" style={{ margin: "20px" }}>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{event.title}</MDBCardTitle>
        <MDBCardText>{event.description}</MDBCardText>
        <MDBBtn href="#" onClick={{ handleRegister }}>
          Button
        </MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className="text-muted">
        {moment(event.date).format("MMMM Do YYYY")}
      </MDBCardFooter>
    </MDBCard>
  );
}
