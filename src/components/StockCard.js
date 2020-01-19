import React, { Component } from 'react'
import { Progress } from "reactstrap";

import {connect} from "react-redux";
import {hideModal , showModal} from "../actions";

 class StockCard extends Component {


    showModal() {

    }

    render() {
        return (
            <div class="shadow p-4 mb-5 bg-white rounded d-flex justify-content-around align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p>{this.props.dp.scrip}</p>
              <h2>${this.props.dp.price}</h2>
            </div>
            <div className="mypic">
              <img className="w-50" src="isharelogo1.jpg" alt="" />
            </div>
            <div className="">
              <p className="lead">
                <strong className="mr-1">Quantity:</strong> {this.props.dp.quantity}
              </p>
              <p className="lead">
                <strong className="mr-1">Avg. Cost:</strong> ${this.props.dp.avg_cost}
              </p>
              <p className="lead">
                <strong className="mr-1">Invested Amt:</strong> $
                {this.props.dp.invested_amount}
              </p>
            </div>
            <div className="">
              <p className="lead">
                <strong className="mr-1">Market Value:</strong> $
                {this.props.dp.price * this.props.dp.quantity}
              </p>
              <p className="lead">
                <strong className="mr-1">% of portfolio value</strong>
                {this.props.dp.portfolio_value_percent}%
              </p>
              <div>
                <Progress
                  color="success"
                  value={this.props.dp.portfolio_value_percent}
                />
              </div>
            </div>

            <div className="">
              <p className="lead">
                <strong className="mr-1">Unrealized P/L:</strong>{" "}
                {this.props.dp.unrealized_pl}
              </p>
              <p className="lead">
                <strong className="mr-3">% Return</strong>
                {this.props.dp.return_percent >= 0 ? (
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
                {this.props.dp.return_percent}%
              </p>

              {this.props.dp.return_percent >= 0 ? (
                <div class="progress w-25">
                  <div
                    class="progress-bar  bg-success"
                    role="progressbar"
                    style={{ width: this.props.dp.return_percent }}
                    aria-valuenow={this.props.dp.return_percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              ) : (
                <div class="progress w-25">
                  <div
                    class="progress-bar ml-auto bg-danger"
                    role="progressbar"
                    style={{ width: -this.props.dp.return_percent  }}
                    aria-valuenow={this.props.dp.return_percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              )}
            </div>

            <div className="d-flex flex-column justify-content-center align-items-around">
              <button type="button" class="btn btn-outline-success mb-3" onClick = { () => this.props.showModal({
                quantity: this.props.dp.quantity ,
                price: this.props.dp.price ,
                scrip: this.props.dp.scrip
              })}>
                TRADE
              </button>
  
            </div>
          </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        modalStatus : state.modalStatus
    }

}

export default connect(mapStateToProps , {
  showModal , hideModal
})(StockCard);