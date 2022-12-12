import React from "react";
import DeviceDetail from "../DeviceDetails/DeviceDetail";

const Device = (props) => {
  return (
    <div>
      <h2>I have: {props.name}</h2>
      <DeviceDetail price={props.price}></DeviceDetail>
    </div>
  );
};

export default Device;
