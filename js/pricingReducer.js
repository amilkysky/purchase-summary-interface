import { ActionTypes as types } from "./constants";
import pricingData from "../src/pricingData";

const defaultState = {
  tooltipDisplay: false,
  subtotal: pricingData[0].price,
  totalPrice: pricingData[0].price,
  itemDisplayMode: false,
  discountDisplayMode: false,
  discountCode: "none",
  discountInput: ""
};

const pricingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.DISPLAY_TOOLTIP:
      return {
        ...state,
        tooltipDisplay: action.data.tooltipDisplay
      };
    case types.CHANGE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.data.totalPrice
      };
    case types.ITEM_DISPLAY_MODE:
      return {
        ...state,
        itemDisplayMode: action.data.itemDisplayMode
      };
    case types.DISCOUNT_DISPLAY_MODE:
      return {
        ...state,
        discountDisplayMode: action.data.discountDisplayMode
      };
    case types.APPLY_DISCOUNT:
      return {
        ...state,
        discountCode: action.data.discountCode
      };
    case types.INPUT_DISCOUNT:
      return {
        ...state,
        discountInput: action.data.discountInput
      };
    default:
      return state;
  }
};

export default pricingReducer;
