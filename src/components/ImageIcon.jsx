import React from "react";

const ImageIcon = ({ imgPath, altText, extraStyles }) => {
  return (
    <img
      src={imgPath}
      alt={altText}
      style={{ width: "1.3rem", height: "1.3rem", ...extraStyles }}
    />
  );
};

export default ImageIcon;
