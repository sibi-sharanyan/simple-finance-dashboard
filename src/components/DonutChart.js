import React, { Component } from 'react'
import { Doughnut } from "react-chartjs-2";

export default class DonutChart extends Component {
    render() {
        return (
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
        )
    }
}
