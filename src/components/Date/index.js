import React from "react";
import { Container } from "./DateStyles";

const DateToday = () => {
  let today = new Date();
  let date =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

  return (
    <Container>
      <p>{date}</p>
    </Container>
  );
};

export default DateToday;
