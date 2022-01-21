import React from "react";
import { DateContainer } from "./DataStyle";

const DateToday = () => {
  let today = new Date();
  let date =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

  return (
    <DateContainer>
      <p>{date}</p>
    </DateContainer>
  );
};

export default DateToday;
