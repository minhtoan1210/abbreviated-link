import Link from "next/link";
import React from "react";
import './style.css'

export default function page() {
  return (
    <div className="tags">
      <div className="title">Your tags</div>
      <div className="item">
        <div className="item-tag">#2</div>
        <div className="item-text">https://znews.vn/</div>
        <Link href="#" className="item-shorten">
          https://cutt.ly/0216321698
        </Link>
      </div>
    </div>
  );
}
