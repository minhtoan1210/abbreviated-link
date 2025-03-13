"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";

export default function Crawler() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Link href="#" className="btn-link-management" onClick={showDrawer}>
        Crawler (enabled)
      </Link>
      <Drawer
        title="Crawler settings"
        onClose={onClose}
        open={open}
        className="drawer-setting"
      >
        <p>Current status: enabled</p>
        <p>
          Changing the settings for this feature requires an Enterprise
          subscription plan.
        </p>
        <p>
          We use an automatic crawler (robot) that checks shortened links at
          random in order to block suspicious phishing links. This may cause the
          link to be clicked for review.
        </p>
        <p>Our Enterprise customers can disable this checking.</p>
        <div className="btn-purchase">Purchase Team Enterpise</div>
      </Drawer>
    </>
  );
}
