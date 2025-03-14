import React from "react";
import "./style.css";

export default function page() {
  return (
    <div className="passRegistry">
      <div className="title">Password change registry</div>
      <div className="table">
        <div className="row thead">
          <div className="col_date">Date (UTC 0)</div>
          <div className="col_description">Description</div>
        </div>
        {[...Array(5)].map((_, key) => (
          <div className="row" key={key}>
            <div className="col_date">2025-03-11 01:54:45</div>
            <div className="col_description">2a09:bac5:d46c:25d7::3c5:d</div>
          </div>
        ))}
      </div>
    </div>
  );
}
