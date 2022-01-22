import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Container, TimeStamp, Greeting } from "./TimeStyles";

const Time = () => {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 6 && today.getHours() < 12) {
      return "Bom dia! Que seu dia seja maravilhoso.";
    } else if (today.getHours() >= 12 && today.getHours() < 18) {
      return "Boa tarde, não esqueça de se hidratar.";
    } else if (today.getHours() >= 18 && today.getHours() < 24) {
      return "Boa Noite! Aproveite e tenha uma ótima noite de sono.";
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
