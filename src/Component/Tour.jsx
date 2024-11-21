import React from "react";
import Card from "./Card";

function Tour({ state, remove }) {
  return (
    <div>
      <h1
        style={{
          fontFamily: "sans-serif",
          letterSpacing: "10px",
          fontSize: "50px",
          textDecoration: "underline",
          padding: "20px",
        }}
      >
        Tour & Travel
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",

          flexWrap: "wrap",
          margin: "20px",
        }}
      >
        {state.map((items) => {
          return <Card {...items} key={items.id} remove={remove} />;
        })}
      </div>
    </div>
  );
}

export default Tour;
