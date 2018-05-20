import React from "react";
import { connect } from "react-redux";
import * as actions from "../js/actions";

class PickupSavings extends React.Component {
  constructor(props) {
    super(props);
    this.handlePickupSavingsToggle = this.handlePickupSavingsToggle.bind(this);
    this.renderSavingsTooltip = this.renderSavingsTooltip.bind(this);
  }

  handlePickupSavingsToggle() {
    let mode = null;
    if (this.props.tooltipDisplay === false) {
      mode = true;
    } else if (this.props.tooltipDisplay === true) {
      mode = false;
    }
    this.props.dispatch(actions.displayTooltip(mode));
  }

  renderSavingsTooltip() {
    if (this.props.tooltipDisplay === true) {
      return (
        <div className="tooltip">
          Picking up your order in the store helps cut costs, and we pass the
          savings on to you.
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="purchase-summary-text pickup-savings">
        <p onClick={this.handlePickupSavingsToggle}>Pickup Savings</p>
        {this.renderSavingsTooltip()}
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
    tooltipDisplay: state.pricingReducer.tooltipDisplay
  };
})(PickupSavings);
