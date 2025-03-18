import React, { useState } from "react";

const Responsiveness = () => {
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecreament = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: "100px",
          flexDirection: "column",
        }}
      >
        <h1>Counter App</h1>

        <br />

        <p
          className=""
          style={{
            fontSize: count >= 20 ? "35px" : count < 0 ? "10px" : "25px",
            backgroundColor: count < 0 ? "red" : "green",
            padding: "7px",
          }}
        >
          {count}
        </p>
      </div>

      <div
        className=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: "60px",
        }}
      >
        <button
          className="icreament"
          style={{
            padding: "22px",
            borderRadius: ".6rem",
            border: "none",
            backgroundColor: "#0f0",
            margin: "25px",
            fontSize: "20px",
          }}
          onClick={handleIncreament}
        >
          Increament
        </button>
        <button
          className="decreament"
          style={{
            padding: "22px",
            borderRadius: ".6rem",
            border: "none",
            backgroundColor: "#f00",
            fontSize: "20px",
          }}
          onClick={handleDecreament}
        >
          Decreament
        </button>

        <div className="reset">
          <button
            style={{
              padding: "22px",
              borderRadius: ".6rem",
              border: "none",
              backgroundColor: "#000",
              fontSize: "20px",
              color: "#fff5e4",
              marginLeft: " 120px ",
            }}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Responsiveness;
