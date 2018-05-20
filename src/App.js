import React from "react";
import PurchaseSummary from "./PurchaseSummary";
import pricingData from "./pricingData.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="main-heading">
          <img
            className="yellowstar"
            alt="walmart-logo"
            src="https://uploads.codesandbox.io/uploads/user/987713d6-75c8-4317-b220-1ba145aee40e/kP_9-Screen%20Shot%202018-05-19%20at%201.29.43%20AM.png"
          />
          <b>Checkout</b>
        </div>
        <PurchaseSummary />
        <div className="footer">© 2018 Daphne Dang for Walmart Inc.</div>
      </div>
    );
  }
}

export default App;
