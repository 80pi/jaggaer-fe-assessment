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
    <div style={{ backgroundColor: "#fff", width: "45%", padding: "1rem" }}>
      <h4 className="headerContainer">PRICING & SHIPPING</h4>
      <div>
        <ul style={{ margin: "0" }}>
          <li key={`feature-min-order`}>
            <span className="itemSubHeading">Minimum Order:</span>
            {minimum_order_quantity} {unit}
          </li>
          <li key={`feature-unit`}>
            <span className="itemSubHeading">Shipping:</span>
            {transport_costs} {currency}
          </li>
          <li key={`feature-delivery-time`}>
            <span className="itemSubHeading">Delivery Time:</span>
            {delivery_time} days
          </li>
        </ul>
        <div style={{ marginLeft: "1.25rem", marginTop: "2rem" }}>
          <p className="itemSubHeading">Price breaks</p>
        </div>
        <p style={{ width: "13rem", margin: "0.25rem" }}>
          <hr className="itemSubHeading" />
        </p>
        {Object.entries(price_breaks).map((price) => {
          return (
            <div style={{ width: "38%", margin: "0" }}>
              <p style={{ margin: "0", display: "flex" }}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "5rem",
                  }}
                >
                  ex{price[0]} {unit}
                </span>{" "}
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "8rem",
                  }}
                >
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
