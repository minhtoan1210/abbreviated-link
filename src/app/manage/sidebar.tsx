"use client";

import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Menu, Layout, Space, Input, ConfigProvider } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import type { MenuProps } from "antd";
import { menuItems } from "./menuItems";
import type { GetProps } from "antd";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLogoutMutation } from "@/queries/useAuth";
import { useRouter } from "next/navigation";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export default function Sidebar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const logoutMutation = useLogoutMutation();

  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    router.push("/login");
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{
          height: "100vh",
          overflowY: "scroll",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="demo-logo-vertical p-[11.5px] bg-[white]"
          style={{
            borderBottom: "1px solid #c2c2c2",
            borderRight: "1px solid #c2c2c2",
          }}
        >
          <img
            src="/images/cuttly.svg"
            alt=""
            style={{ filter: "brightness(0.5)" }}
          />
        </div>
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: "white" }}
          className="header-manage"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <div className="right">
            <Space direction="vertical">
              <Search
                placeholder="search by link"
                onSearch={onSearch}
                className="flex"
              />
            </Space>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="your-account">
                <Button className="border-[0]">
                  <span>Your account</span> <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-[150px] border-[solid] border-[#f8f8f8]">
                <DropdownMenuItem>
                  <Link
                    href="/"
                    className="text-[16px  text-center] w-full p-[15px] hover:text-[#ffffff] hover:bg-[#1b5aff] text-[12px] cursor-pointer"
                  >
                    Edit account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    className="text-[16px  text-center] w-full p-[15px] hover:text-[#ffffff] hover:bg-[#1b5aff] text-[12px] cursor-pointer"
                    onClick={handleLogout}
                  >
                    Log out
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Header>
        <Content
          style={{
            margin: "14px",
            padding: "14px",
            flex: 1,
            height: "100vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
