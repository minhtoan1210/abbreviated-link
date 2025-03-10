"use client";
import React, { useState } from "react";
import { Drawer, Input } from "antd";
import Link from "next/link";

export default function ChangeEmailAddress() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Link
        href="#"
        className="custom-domains btn-link-management"
        onClick={showDrawer}
      >
        change email address
      </Link>
      <Drawer title="Email" onClose={onClose} open={open} className="drawer-email">
        <div className="title-email">Email</div>
        <Input placeholder="Enter your password" type="password" />
        <Input placeholder="Email address" />
        <div className="btn-save">Save</div>
      </Drawer>
    </>
  );
}
