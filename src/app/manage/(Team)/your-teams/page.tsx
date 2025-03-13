import React from "react";
import "./style.css";
import Link from "next/link";

export default function page() {
  return (
    <div className="your-teams">
      <div className="title">Your teams</div>
      <div className="text-sub">No teams</div>
      <Link href="#" className="btn-create btn">
        <img src="/images/link_bg.svg" alt="" />
        <span>Create new team</span>
      </Link>
    </div>
  );
}
