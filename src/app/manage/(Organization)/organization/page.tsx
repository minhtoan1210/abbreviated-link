"use client";
import React, { useState } from "react";
import "./style.css";
import ComponentTable from "./table";
import OrganizationForm from "./formOrganization";

export default function page() {
  const [id, setId] = useState<{ type: string; id: string } | null>({
    type: "",
    id: "",
  });

  return (
    <div className="organization">
      <div className="header-table">
        <div className="title">organization</div>
        <OrganizationForm data={id} setId={setId}/>
      </div>
      <ComponentTable setId={setId} />
    </div>
  );
}
