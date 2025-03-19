import React from "react";
import "./style.css";
import Link from "next/link";
import OrganizationGroups from "../component/OrganizationGroups";

export default function page() {

  return (
    <div className="your-teams">
      <OrganizationGroups />
    </div>
  );
}
