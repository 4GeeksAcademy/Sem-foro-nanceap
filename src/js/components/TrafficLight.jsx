import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="d-flex flex-column align-items-center mt-5">

      <div className="traffic-bar"></div>

      <div className="traffic-light">
        <div
          className={`light bg-danger ${color === "danger" ? "active" : ""}`}
          onClick={() => setColor("danger")}
        ></div>
        <div
          className={`light bg-warning ${color === "warning" ? "active" : ""}`}
          onClick={() => setColor("warning")}
        ></div>
        <div
          className={`light bg-success ${color === "success" ? "active" : ""}`}
          onClick={() => setColor("success")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;


