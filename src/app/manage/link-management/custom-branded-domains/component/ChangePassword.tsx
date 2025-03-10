"use client";
import React, { useState } from "react";
import { Button, Drawer, Input } from "antd";
import Link from "next/link";

export default function ChangePassword() {
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
        className="change-password btn-link-management"
        onClick={showDrawer}
      >
        change password
      </Link>
      <Drawer
        title="Password"
        onClose={onClose}
        open={open}
        className="drawer-password"
      >
        <div className="title-password">Password</div>
        <Input placeholder="Old password" />
        <Input placeholder="New password" />
        <Input placeholder="Repeat password" />
        <div className="btn-save">Save</div>
      </Drawer>
    </>
  );
}
