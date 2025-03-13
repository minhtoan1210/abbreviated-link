"use client";
import { Switch } from "antd";
import React, { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import "./style.css";

export default function page() {
  const [checked, setChecked] = useState(false);

  const handleCheckSwitch = (value: any) => {
    setChecked(value);
  };
  return (
    <div className="delete">
      <div className="title">Deleting accounts</div>
      <div className="text-sub">Do you want to delete your account?</div>
      <p>
        You have the option to permanently delete your account here. Please note
        that the account deletion process will take 14 days. During this period,
        you will have the opportunity to reverse your decision and restore your
        account. After this time, restoration will no longer be possible. Be
        aware that this action is irreversible and will result in the complete
        removal of your account, including all links, teams, and settings.
        Please proceed with caution.
      </p>
      <div className="switch">
        <Switch
          checkedChildren={<CheckOutlined />}
          checked={checked}
          onChange={handleCheckSwitch}
        />
        <span>I understand and want to delete my account</span>
      </div>
      <div className={`btn-delete ${checked && 'active'}`}>Delete your account</div>
    </div>
  );
}
