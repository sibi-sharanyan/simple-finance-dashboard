import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { hideModal, showModal, toggleBuy, changeCounter } from "../actions";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import CounterInput from "react-counter-input";
import Swal from "sweetalert2";

class FormModal extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          centered
          show={this.props.modalStatus}
          onHide={() => this.props.hideModal()}
        >
          <Modal.Header className={this.props.modalSpecs.titleBG} closeButton>
            <Modal.Title className="text-white">
              {this.props.modalSpecs.status} {this.props.modalStatus.scrip}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="">
                <p className="blockquote">  Quantity:  </p>
                <div className="w-75">
                  <CounterInput
                    className="w-75"
                    count={this.props.modalSpecs.quantity}
                    min={1}
                    max={this.props.modalStatus.quantity}
                    onCountChange={count => this.props.changeCounter(count)}
                  />
                </div>
              </div>

              <div className="">
                <p className="blockquote">Price: ${this.props.modalStatus.price}</p>
              </div>

              <div className="">
                <p className="blockquote">
                  Value: $
                  {Math.round(
                    this.props.modalSpecs.quantity *
                      this.props.modalStatus.price *
                      100
                  ) / 100}
                </p>
              </div>

         

            </div>
          </Modal.Body>


          <Modal.Footer>

          <BootstrapSwitchButton
              size="sm"
              checked={this.props.modalSpecs.status === "Buy" ? true : false}
              onlabel="Buy"
              offlabel="Sell"
              onChange={checked => {
                this.props.toggleBuy({
                  status: checked,
                  quantity: this.props.modalStatus.quantity
                });
              }}
            />

            <button
              className="btn btn-success"
              onClick={() => {
                if (
                  this.props.modalStatus.quantity < this.props.counter &&
                  this.props.modalSpecs.status === "Sell"
                ) {
                  Swal.fire({
                    icon: "error",
                    title: `Invalid Entry`,
                    text: `You can't sell more than what you are currently Holding`
                  });
                } else {
                  Swal.fire({
                    icon: "question",
                    title: `Are you sure?`,
                    text: `You are about to ${this.props.modalSpecs.status} ${
                      this.props.modalStatus.scrip
                    } of value $${Math.round(
                      this.props.modalSpecs.quantity *
                        this.props.modalStatus.price *
                        100
                    ) / 100} `,
                    showCloseButton: true,
                    showCancelButton: true
                  });
                }
              }}
            >
              Place Order
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalStatus: state.modalStatus,
    modalSpecs: state.modalSpecs
  };
};

export default connect(mapStateToProps, {
  showModal,
  hideModal,
  toggleBuy,
  changeCounter
})(FormModal);
