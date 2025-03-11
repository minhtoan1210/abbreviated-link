import React from "react";
import "./style.css";

export default function page() {
  return (
    <div className="loginLog">
      <div className="title">Login registry (last 3 logins)</div>
      <div className="table">
        <div className="row thead">
          <div className="col_date">Date (UTC 0)</div>
          <div className="col_ip">IP</div>
          <div className="col_country">Country</div>
        </div>
        {[...Array(5)].map(() => (
          <div className="row">
            <div className="col_date">2025-03-11 01:54:45</div>
            <div className="col_ip">2a09:bac5:d46c:25d7::3c5:d</div>
            <div className="col_country">Vietnam</div>
          </div>
        ))}
      </div>
    </div>
  );
}
