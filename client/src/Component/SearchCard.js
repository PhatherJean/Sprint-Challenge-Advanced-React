import React from "react";

export default function SearchCard({ data }) {
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        padding: "25px",
      }}
    >
      <h1>{data.name}</h1>
      <h4>Location: {data.country}</h4>
      <caption>Search: {data.searches}</caption>
    </div>
  );
}
