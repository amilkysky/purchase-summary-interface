import React from "react";
import { connect } from "react-redux";
import PickupSavings from "./PickupSavings";
import SeeItemDetails from "./SeeItemDetails";
import ApplyPromoCode from "./ApplyPromoCode";
import pricingData from "./pricingData";

class PurchaseSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="purchase-summary-box">
        <div className="pricingBox">
          <p className="purchase-summary-text">
            Subtotal <b>${this.props.subtotal}</b>
          </p>
          <PickupSavings />
          <p className="total">
            Est. total <b>${this.props.totalPrice}</b>
          </p>
        </div>
        <SeeItemDetails />
        <ApplyPromoCode />
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
    subtotal: state.pricingReducer.subtotal,
    totalPrice: state.pricingReducer.totalPrice
  };
})(PurchaseSummary);
