import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({
  title,
  imageUrl1,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
  className, // ✅ Add this
}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <img src={imageUrl1} alt="Shop Now" className="shop-now-image" />
    </div>
  </div>
);
export default withRouter(MenuItem);
