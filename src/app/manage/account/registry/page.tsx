import React from "react";
import "./style.css";

export default function page() {
  return (
    <div className="registry">
      <div className="title">
        <span>Your subscription - Registry</span>
        <div className="account">
          <span>
            Primary notification e-mail: nguyenvuminhtoan1999@gmail.com
          </span>
          <span>Additional e-mail for invoices: Email not set</span>
        </div>
      </div>
      <div className="table">
        <div className="row thead">
          <div className="col-data">Date (UTC 0)</div>
          <div className="col-description">Description</div>
          <div className="col-amount">Amount</div>
        </div>
      </div>
    </div>
  );
}
