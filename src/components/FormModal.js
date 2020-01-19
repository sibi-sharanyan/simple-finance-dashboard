import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { hideModal, showModal, toggleBuy, changeCounter } from "../actions";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import CounterInput from "react-bootstrap-counter";
import Swal from "sweetalert2";

class FormModal extends Component {
  handleSwitch(elem, state) {
    console.log("handleSwitch. elem:", elem);
    console.log("name:", elem.props.name);
    console.log("new state:", state);
  }

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
            <div className="">
              <div className="">
                <p className="lead">
                  Quantity:{" "}
                  <div className="w-25">
                    <CounterInput
                      value={this.props.modalStatus.quantity}
                      min={1}
                      max={
                       Infinity
                      }
                      onChange={value => {
                        this.props.changeCounter(value);
                      }}
                    />
                  </div>
                </p>
              </div>

              <div className="">
                <p className="lead">Price: ${this.props.modalStatus.price}</p>
              </div>

              <div className="">
                <p className="lead">
                  Value: $
                  {Math.round(
                    this.props.counter * this.props.modalStatus.price * 100
                  ) / 100}
                </p>
              </div>
            </div>
          </Modal.Body>
          <div className="my-5 ml-2">
            <BootstrapSwitchButton
              size="xs"
              checked={this.props.modalSpecs.status === "Buy" ? true : false}
              onlabel="Buy"
              offlabel="Sell"
              onChange={checked => {
                this.props.toggleBuy(checked);
              }}
            />
          </div>

          <Modal.Footer>
            <button
              className="btn btn-success"
              onClick={() => {
                
                if(this.props.modalStatus.quantity < this.props.counter && this.props.modalSpecs.status  === 'Sell'){
                  Swal.fire({
                    icon: "error",
                    title: `Invalid Entry`,
                    text: `You can't sell more than what you are currently Holding`,
                   
                  });

                }else {
                  Swal.fire({
                    icon: "question",
                    title: `Are you sure?`,
                    text: `You are about to ${this.props.modalSpecs.status} ${
                      this.props.modalStatus.scrip
                    } of value $${Math.round(
                      this.props.counter * this.props.modalStatus.price * 100
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
    modalSpecs: state.modalSpecs,
    counter: state.counter
  };
};

export default connect(mapStateToProps, {
  showModal,
  hideModal,
  toggleBuy,
  changeCounter
})(FormModal);
