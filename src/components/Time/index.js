import React from "react";
import Moment from "react-moment";
import "moment-timezone";

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
    <div>
      <p>
        <Moment format="LT" />
      </p>
      <p>{greeting()}</p>
    </div>
  );
};

export default Time;
