"use client";
import React, { useState } from "react";
import { Drawer, Switch } from "antd";
import Link from "next/link";
import { CheckOutlined } from "@ant-design/icons";

export default function GlobalStatistics() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleCheckSwitch = (value: any) => {
    setChecked(value);
  };

  return (
    <>
      <Link
        href="#"
        className="global-statistics btn-link-management"
        onClick={showDrawer}
      >
        Global statistics
      </Link>
      <Drawer
        title="Global statistics"
        onClose={onClose}
        open={open}
        className="drawer-global"
      >
        <div className="title-block-from">Block from public view:</div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="switch-text">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
          />
          <div className="text">Total clicks</div>
        </div>
        <div className="btn-save">Save</div>
        <div className="description">
          It only applies when the public statistics option is enabled. It is
          applicable to the main dashboard. To change the settings for the Team
          - go to the settings of a specific Team.
        </div>
      </Drawer>
    </>
  );
}
