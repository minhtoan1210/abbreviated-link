import React from "react";
import './style.css'

export default function page() {
  return (
    <div className="invoices">
      <div className="title">
        <span>Your invoices</span>
        <span>
          Each invoice is sent to the e-mail after the payment has been
          collected.
        </span>
      </div>
      <div className="table">No invoices.</div>
    </div>
  );
}
