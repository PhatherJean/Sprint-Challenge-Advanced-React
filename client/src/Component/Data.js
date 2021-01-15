import React, { Component } from "react";
import axios from "axios";
import SearchCard from "./SearchCard";

export default class Data extends Component {
  state = {
    datasets: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        console.log(res);
        this.setState({ ...this.state, datasets: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.datasets.map((data) => (
          <SearchCard key={data.id} data={data} />
        ))}
      </div>
    );
  }
}
