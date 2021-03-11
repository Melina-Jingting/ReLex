import React from "react";

const SvgIcon = ({ src, width, height }) => (
  <img src={require(`../../img/svg/${src}`)} alt={src} with={width} height={height} />
);

export default SvgIcon;

