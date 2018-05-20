import React from "react";
import { connect } from "react-redux";
import * as actions from "../js/actions";

class ApplyPromoCode extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpanderClick = this.handleExpanderClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.renderDiscountBox = this.renderDiscountBox.bind(this);
    this.handleDiscountCodeSubmit = this.handleDiscountCodeSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleExpanderClick() {
    let mode = null;
    if (this.props.discountDisplayMode === false) {
      mode = true;
    } else {
      mode = false;
    }
    this.props.dispatch(actions.discountDisplayMode(mode));
  }

  handleToggle() {
    if (this.props.discountDisplayMode === true) {
      return (
        <span onClick={this.handleExpanderClick}>
          <span className="expandable">Hide Promo Code</span>
          <span>{"\u2014"}</span>
        </span>
      );
    } else {
      return (
        <span onClick={this.handleExpanderClick}>
          <span className="expandable">Apply Promo Code</span>
          <span>+</span>
        </span>
      );
    }
  }

  renderDiscountBox() {
    if (this.props.discountDisplayMode === true) {
      return (
        <div>
          <form>
            <label className="promo">Promo Code</label>
            <input
              onChange={event => this.handleInput(event)}
              value={this.props.discountInput}
              type="text"
            />
            <button
              className="button"
              type="submit"
              onClick={this.handleDiscountCodeSubmit}
            >
              <b>Apply</b>
            </button>
          </form>
        </div>
      );
    } else {
      return null;
    }
  }

  handleDiscountCodeSubmit(event) {
    if (
      this.props.discountCode !== "DISCOUNT" &&
      this.props.discountInput === "DISCOUNT"
    ) {
      this.props.dispatch(actions.changeTotalPrice(this.props.subtotal));
    }
    this.props.dispatch(actions.applyDiscount(this.props.discountInput));
    this.props.dispatch(actions.inputDiscount(""));
    event.preventDefault();
  }

  handleInput(event) {
    this.props.dispatch(actions.inputDiscount(event.target.value));
  }

  render() {
    return (
      <div className="purchase-summary-text section">
        {this.handleToggle()}
        {this.renderDiscountBox()}
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
    subtotal: state.pricingReducer.subtotal,
    discountDisplayMode: state.pricingReducer.discountDisplayMode,
    discountCode: state.pricingReducer.discountCode,
    discountInput: state.pricingReducer.discountInput
  };
})(ApplyPromoCode);
