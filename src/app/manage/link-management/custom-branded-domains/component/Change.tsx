"use client";
import React, { useState } from "react";
import { Drawer, InputNumber } from "antd";
import Link from "next/link";
import type { InputNumberProps } from "antd";

export default function Change() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
  };

  return (
    <>
      <Link
        href="#"
        className="links-per-pagination btn-link-management"
        onClick={showDrawer}
      >
        change
      </Link>
      <Drawer
        title="changeLinks per page | Pagination"
        onClose={onClose}
        open={open}
        className="drawer-change-links"
      >
        <div className="title-change-links">Number of links / URLs</div>
        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
        <div className="btn-save">Save</div>
      </Drawer>
    </>
  );
}
