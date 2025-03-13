import { QRCode } from "antd";
import Link from "next/link";
import React from "react";
import './style.css'

export default function page() {
  return (
    <div className="globalqr">
      <div className="title">QR Codes</div>
      <div className="text-sub">settings</div>
      <QRCode type="svg" value="https://ant.design/" className="qr-globalqr"/>
      <div className="customizable">
        <div className="text">
          <span>Customizable QR Codes</span>
          <span>No editing options, one style only</span>
        </div>
        <Link href="#" className="btn-upgrade">
        <img src="/images/link_bg.svg" alt="" />
        Upgrade to customize</Link>
      </div>
    </div>
  );
}
