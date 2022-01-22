import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Container, TimeStamp, Greeting } from "./TimeStyles";

const Time = () => {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 6 && today.getHours() < 12) {
      return "Bom dia";
    } else if (today.getHours() >= 12 && today.getHours() < 18) {
      return "Boa tarde";
    } else if (today.getHours() >= 18 && today.getHours() < 24) {
      return "Boa Noite";
    } else {
    }
  };

  return (
    <Container>
      <TimeStamp>
        <Moment format="LT" />
      </TimeStamp>
      <Greeting>{greeting()}</Greeting>
    </Container>
  );
};

export default Time;
