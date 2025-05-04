import React from "react";
import ItemDetail from "../components/Item/ItemDetail";
import ItemPricing from "../components/Item/ItemPricingAndShipping";
import { useMockData } from "../context/DataContext";

const ItemDescriptionContainer = () => {
  const { mockData } = useMockData();
  return (
    <div style={{ backgroundColor: "#EFEFEF", padding: "1.4rem" }}>
      <div style={{ width: "85%" }}>
        <h5 style={{ color: "#ea9189" }}>DESCRIPTION</h5>
        <p>{mockData?.article?.description_short}</p>
        <p>{mockData?.article?.description_long}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ItemDetail />
          <ItemPricing />
        </div>
      </div>
    </div>
  );
};

export default ItemDescriptionContainer;
