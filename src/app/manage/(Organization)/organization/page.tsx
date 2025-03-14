import React from "react";
import "./style.css";
import ComponentTable from "./table";
import CreateForm from "./createForm";

export default function page() {
  return (
    <div className="organization">
      <div className="header-table">
        <div className="title">organization</div>
        <CreateForm />
      </div>
      <ComponentTable />
    </div>
  );
}
