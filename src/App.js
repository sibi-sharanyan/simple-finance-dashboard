import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Progress } from "reactstrap";
import { Doughnut } from "react-chartjs-2";

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
        <div className="">
          {this.state.data.map(dp => {
            return (
              <div class="shadow p-4 mb-5 bg-white rounded d-flex justify-content-around align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <p>{dp.scrip}</p>
                  <h2>${dp.price}</h2>
                </div>
                <div className="mypic">
                  <img className="w-50" src="isharelogo1.jpg" alt="" />
                </div>
                <div className="">
                  <p className="lead">
                    <strong className="mr-1">Quantity:</strong> {dp.quantity}
                  </p>
                  <p className="lead">
                    <strong className="mr-1">Avg. Cost:</strong> ${dp.avg_cost}
                  </p>
                  <p className="lead">
                    <strong className="mr-1">Invested Amt:</strong> $
                    {dp.invested_amount}
                  </p>
                </div>
                <div className="">
                  <p className="lead">
                    <strong className="mr-1">Market Value:</strong> $
                    {dp.price * dp.quantity}
                  </p>
                  <p className="lead">
                    <strong className="mr-1">% of portfolio value</strong>
                    {dp.portfolio_value_percent}%
                  </p>
                  <div>
                    <Progress
                      color="success"
                      value={dp.portfolio_value_percent}
                    />
                  </div>
                </div>

                <div className="">
                  <p className="lead">
                    <strong className="mr-1">Unrealized P/L:</strong>{" "}
                    {dp.unrealized_pl}
                  </p>
                  <p className="lead">
                    <strong className="mr-3">% Return</strong>
                    {dp.return_percent >= 0 ? (
                      <i
                        class="mr-2 fa fa-caret-up text-success"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        class="mr-2 fa fa-caret-down text-danger"
                        aria-hidden="true"
                      ></i>
                    )}
                    {dp.return_percent}%
                  </p>

                  {dp.return_percent >= 0 ? (
                    <div class="progress w-25">
                      <div
                        class="progress-bar  bg-success"
                        role="progressbar"
                        style={{ width: dp.return_percent }}
                        aria-valuenow={dp.return_percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  ) : (
                    <div class="progress w-25">
                      <div
                        class="progress-bar ml-auto bg-danger"
                        role="progressbar"
                        style={{ width: -dp.return_percent  }}
                        aria-valuenow={dp.return_percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  )}
                </div>

                <div className="d-flex flex-column justify-content-center align-items-around">
                  <button type="button" class="btn btn-outline-warning mb-3">
                    BUY
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    SELL
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-50">
          <Doughnut
            data={{
              labels: ["Mutual Fund", "ETF"],
              datasets: [
                {
                  label: "Portfolio",
                  backgroundColor: ["rgb(75,192,192)", "rgb(101, 67, 33)"],
                  data: [7, 3]
                }
              ]
            }}
          />
        </div>
      </div>
    );
  }
}
