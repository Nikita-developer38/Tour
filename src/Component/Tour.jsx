import React from "react";
import Card from "./Card";

function Tour({ state, remove }) {
  return (
    <div>
      <div className="d-flex flex-row align-items-center">
        <img
          alt="img"
          className="w-50 h-25"
          src="https://i.pinimg.com/originals/bc/8e/76/bc8e764bece45d88dfb31c6fcabca83a.png"
        />
        <h1 className="" style={{ fontFamily: "cursive" }}>
          {" "}
          Tour & Travel
        </h1>
      </div>
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
