import React, { Component } from "react";
import "./css/App.css";
import axios from "axios";
import DonutChart from "./components/DonutChart";
import StockCard from "./components/StockCard";
import FormModal from "./components/FormModal";
export default class extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("https://www.mocky.io/v2/5e22bc9b2f00005b002225e8").then(res => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div className="container-fluid my-5">
        <FormModal />

        <div className="">
          {this.state.data.map(dp => {
            return <StockCard dp={dp} />;
          })}
        </div>

        <DonutChart />
      </div>
    );
  }
}
