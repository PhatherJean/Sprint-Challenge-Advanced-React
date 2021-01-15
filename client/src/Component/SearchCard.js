import React from "react";

export default function SearchCard(props) {
  const { data } = props;
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        padding: "25px",
        width: "50%",
        margin: "0 auto",
      }}
    >
      <h1>{data.name}</h1>
      <h4>Location: {data.country}</h4>
      <caption>Search: {data.searches}</caption>
    </div>
  );
}
