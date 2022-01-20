import React from "react";

function Parity(props) {
  const divStyles = {
    backgroundColor: props.count % 2 === 0 ? "green" : "red",
    transition: "background-color 200ms linear",
    borderRadius: "8px",
    padding: "1rem",
    margin: "2rem 1rem",
  };
  return (
    <div style={divStyles} data-testid="parity-div">
      This number is {props.count % 2 === 0 ? "even" : "odd"}
    </div>
  );
}

export default Parity;
