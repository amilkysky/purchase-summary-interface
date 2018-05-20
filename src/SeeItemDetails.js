import React from "react";
import { connect } from "react-redux";
import * as actions from "../js/actions";
import pricingData from "./pricingData";

class SeeItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpanderClick = this.handleExpanderClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.renderItemBox = this.renderItemBox.bind(this);
    this.displayPrice = this.displayPrice.bind(this);
  }

  handleExpanderClick() {
    let mode = null;
    if (this.props.itemDisplayMode === false) {
      mode = true;
    } else {
      mode = false;
    }
    this.props.dispatch(actions.itemDisplayMode(mode));
  }

  handleToggle() {
    if (this.props.itemDisplayMode === true) {
      return (
        <span onClick={this.handleExpanderClick}>
          <span className="expandable">Hide Item Details</span>
          <span>{"\u2014"}</span>
        </span>
      );
    } else {
      return (
        <span onClick={this.handleExpanderClick}>
          <span className="expandable">See Item Details</span>
          <span>+</span>
        </span>
      );
    }
  }

  renderItemBox() {
    if (this.props.itemDisplayMode === true) {
      return (
        <div>
          <img className="item" src={pricingData[0].imgURL} />
          <p>
            <b>{pricingData[0].itemName}</b>
          </p>
          <p>{pricingData[0].details}</p>
          {this.displayPrice()}
        </div>
      );
    } else {
      return null;
    }
  }

  displayPrice() {
    if (this.props.discountCode !== "DISCOUNT") {
      return (
        <p>
          <b>${pricingData[0].price}</b>
        </p>
      );
    } else if (this.props.discountCode === "DISCOUNT") {
      let newPrice = pricingData[0].price * 0.9;
      return (
        <div>
          <p>
            <b>${newPrice.toFixed(2)}</b>
          </p>
          <p className="originalPrice">${pricingData[0].price}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="purchase-summary-text section">
        {this.handleToggle()}
        {this.renderItemBox()}
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
    itemDisplayMode: state.pricingReducer.itemDisplayMode,
    discountCode: state.pricingReducer.discountCode
  };
})(SeeItemDetails);
