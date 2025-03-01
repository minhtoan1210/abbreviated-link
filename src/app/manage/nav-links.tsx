"use client";
import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { menuItems } from "./menuItems";
import './style.css'


const NavLinks: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={menuItems}
    />
  );
};

export default NavLinks;
