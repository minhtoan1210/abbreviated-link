import React from "react";
import "./style.css";

export default function page() {
  return (
    <div className="limits">
      <div className="title">General limits / volume</div>
      <div className="text-sub">Current plan: Free</div>

      {[...Array(6)].map((item, key) => (
        <div className="item" key={key}>
          <div className="item-left">
            <span>Link shortening limit</span>
            <span>14 / 30 monthly</span>
          </div>
          <div className="item-right">
            <div className="btn-item btn">
              <img src="/images/link_bg.svg" alt="" />
              <span>Upgrade to increase</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
