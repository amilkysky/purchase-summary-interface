import { ActionTypes as types } from "./constants";

export const displayTooltip = (mode) => {
  return {
    type: types.DISPLAY_TOOLTIP,
    data: {
      tooltipDisplay: mode
    }
  };
};

export const changeTotalPrice = subtotal => {
  let price = (subtotal * 0.9).toFixed(2);
  return {
    type: types.CHANGE_TOTAL_PRICE,
    data: {
      totalPrice: price
    }
  };
};

export const itemDisplayMode = mode => {
  return {
    type: types.ITEM_DISPLAY_MODE,
    data: {
      itemDisplayMode: mode
    }
  };
};

export const discountDisplayMode = mode => {
  return {
    type: types.DISCOUNT_DISPLAY_MODE,
    data: {
      discountDisplayMode: mode
    }
  };
};

export const applyDiscount = input => {
  return {
    type: types.APPLY_DISCOUNT,
    data: {
      discountCode: input
    }
  };
};

export const inputDiscount = input => {
  return {
    type: types.INPUT_DISCOUNT,
    data: {
      discountInput: input
    }
  };
};
