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

  return (
    <div className="itemDetailSection">
      <h4 className="headerContainer">DETAILS</h4>
      <div>
        <p className="itemSubHeading">Features</p>
        <ul className="ulItem">
          {Object.entries(features).map((feature, index) => (
            <li key={`feature-${index}`}>
              <span className="itemSubHeading">{feature[0]}</span>: {feature[1]}
            </li>
          ))}
        </ul>
        <p className="itemSubHeading">Attachments</p>
        {attachments.map((item, index) => {
          return (
            <div key={`item-${index}`}>
              <ImageIcon altText={item?.file_name} imgPath={attachement} />
              <a className="aStyle" href={item?.file_link} target="_blank">
                {item?.file_label}
              </a>
            </div>
          );
        })}
        <p className="itemSubHeading">Keywords</p>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          {keywords.map((keyword, index) => (
            <Fab
              key={`keyword-${index}`}
              variant="extended"
              size="small"
              disabled
              aria-label="like"
            >
              {keyword}
            </Fab>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default ItemDetail;
