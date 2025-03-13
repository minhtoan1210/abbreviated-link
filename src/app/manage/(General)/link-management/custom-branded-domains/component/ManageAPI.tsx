"use client";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Link from "next/link";

export default function ManageAPI() {
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
        className="manage-api btn-link-management"
        onClick={showDrawer}
      >
        manage API
      </Link>
      <Drawer title="API" onClose={onClose} open={open} className="drawer-API-key">
        <div className="text-API-key">
          API key:
          <span>444237450d8f2ee01f7147bd2e41410e4dcc9</span>
        </div>
        <div className="btn-generate">Generate/change the API key</div>
        <Link href='#'>API documentation</Link>
      </Drawer>
    </>
  );
}
