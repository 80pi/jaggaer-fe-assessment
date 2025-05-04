import React from "react";
import "../Header.css";
import { useMockData } from "../../context/DataContext";
import { Box, Fab } from "@mui/material";
import ImageIcon from "../ImageIcon";
import attachement from "@resources/icons/attachment.svg";

const ItemDetail = () => {
  const {
    mockData: {
      article: { features, attachments, keywords },
    },
  } = useMockData();
  console.log("fe", features, attachments);
  return (
    <div style={{ backgroundColor: "#fff", width: "45%", padding: "1rem" }}>
      <h4 className="headerContainer">DETAILS</h4>
      <div>
        <p className="itemSubHeading">Features</p>
        <ul style={{ margin: "0" }}>
          {Object.entries(features).map((feature, index) => (
            <li key={`feature-${index}`}>
              {feature[0]}:{feature[1]}
            </li>
          ))}
        </ul>
        <p className="itemSubHeading">Attachments</p>
        {attachments.map((item) => {
          return (
            <div>
              <ImageIcon altText={item?.file_name} imgPath={attachement} />
              <a href={item?.file_link}>{item?.file_label}</a>
            </div>
          );
        })}
        <p className="itemSubHeading">Keywords</p>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          {keywords.map((keyword) => (
            <Fab variant="extended" size="small" disabled aria-label="like">
              {keyword}
            </Fab>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default ItemDetail;
