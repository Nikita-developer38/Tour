import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ id, info, name, price, image, remove }) {
  const [read, setRead] = useState(false);
  const description = read ? info : info.slice(0, 100) + "...";
  const navigate = useNavigate();
  const Checkout = () => {
    navigate("/form", {
      state: {
        name: name,
        price: price,
        image: image,
      },
    });
  };
  return (
    <div
      style={{
        display: "flex",

        justifyContent: "center",
        width: "250px",
        height: "100%",
        margin: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid grey",
          display: "flex",
          flexDirection: "column",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h2>{name}</h2>{" "}
        <img
          alt="img"
          onClick={Checkout}
          style={{ width: "100%", height: "200px" }}
          src={image}
        />
        <p
          style={{
            textAlign: "justify",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {description}{" "}
          {read ? (
            <button
              style={{
                border: "none",
                textDecoration: "underline",
                backgroundColor: "inherit",
                color: "blue",
              }}
              onClick={() => {
                setRead(false);
              }}
            >
              Read Less
            </button>
          ) : (
            <button
              style={{
                border: "none",
                textDecoration: "underline",
                backgroundColor: "inherit",
                color: "blue",
              }}
              onClick={() => {
                setRead(true);
              }}
            >
              Read More
            </button>
          )}
        </p>
        <h4
          style={{
            textAlign: "start",
            color: "#2cdb5b",
            fontSize: "20px",
            marginLeft: "10px",
          }}
        >
          ₹{price}/-
        </h4>
        <button
          onClick={() => {
            remove(id);
          }}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "5px",
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "10px",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
