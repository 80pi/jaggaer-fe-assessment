import React from "react";
import "../Header.css";
import { useMockData } from "../../context/DataContext";

const ItemPricingAndShipping = () => {
  const {
    mockData: {
      article: {
        minimum_order_quantity,
        delivery_time,
        unit,
        transport_costs,
        currency,
        price_breaks,
      },
    },
  } = useMockData();

  return (
    <div className="itemDetailSection">
      <h4 className="headerContainer">PRICING & SHIPPING</h4>
      <div>
        <ul className="ulItem">
          <li key={`feature-min-order`}>
            <span className="itemSubHeading">Minimum Order: </span>
            {minimum_order_quantity} {unit}
          </li>
          <li key={`feature-unit`}>
            <span className="itemSubHeading">Shipping: </span>
            {transport_costs} {currency}
          </li>
          <li key={`feature-delivery-time`}>
            <span className="itemSubHeading">Delivery: </span>
            {delivery_time} days
          </li>
        </ul>
        <div className="itemPriceBreak">
          <p className="itemSubHeading">Price breaks</p>
        </div>
        <div className="itemPriceHr">
          <hr className="itemSubHeading" />
        </div>
        {Object.entries(price_breaks).map((price, index) => {
          return (
            <div className="priceBreakingDiv" key={`price-break-${index}`}>
              <p className="pricep">
                <span className="priceBreakSpanRight">
                  ex{price[0]} {unit}
                </span>{" "}
                <span className="priceBreakSpanLeft">
                  {price[1].toLocaleString("en-US")}
                  {currency}/{unit}
                </span>
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemPricingAndShipping;
