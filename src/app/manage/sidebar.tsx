"use client";
import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  Button,
  Menu,
  Layout,
  Space,
  Input,
  ConfigProvider,
  Form,
  Select,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import type { MenuProps } from "antd";
import { filterMenuByRole, menuItems } from "./menuItems";
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
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useGetListOrganization } from "@/queries/useOrganization";
import { getLocalStorage, setLocalStorage } from "@/lib/utils";
import { jwtDecode } from "jwt-decode";
import { Role } from "@/constants/type";

type SearchProps = GetProps<typeof Input.Search>;

export default function Sidebar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [collapsed, setCollapsed] = useState(false);
  const logoutMutation = useLogoutMutation();
  const { data: getListOrganization } = useGetListOrganization();
  const router = useRouter();
  const pathname = usePathname();
  const [filteredMenu, setFilteredMenu] = useState(menuItems);
  const [role, setRole] = useState<any>(null);

  useEffect(() => {
    if (getListOrganization?.data?.length) {
      setLocalStorage("organization", getListOrganization.data[0]._id);
      setDefaultSelected([getListOrganization.data[0].name]);
    }
  }, [getListOrganization]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const decoded = jwtDecode<{ user: { type: string } }>(token);
        const userRole = decoded.user.type;
        setLocalStorage("roles", userRole);
        setRole(userRole);

        setFilteredMenu(
          filterMenuByRole(
            menuItems,
            [userRole],
            getLocalStorage("organization")
          )
        );
      } catch (error) {
        console.error("Lỗi khi giải mã token:", error);
        setFilteredMenu([]);
      }
    } else {
      console.warn("Token không tồn tại!");
      setFilteredMenu([]);
    }
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    router.push("/login");
  };

  const [defaultSelected, setDefaultSelected] = useState<string[]>([]);

  const handleSelectOrganization = (value: any) => {
    setDefaultSelected(value);
    setLocalStorage("organization", value);
    if (pathname.startsWith("/manage/organization")) {
      router.push(`/manage/organization/${value}`);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{
          height: "100vh",
          overflowY: "scroll",
          background: "#f5f5f5",
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
          items={filteredMenu}
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
              {role && Object.values(Role).includes(role) ? (
                <Form>
                  <Form.Item label="Tên Cty">
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Chọn người dùng"
                      optionFilterProp="children"
                      value={defaultSelected}
                      onChange={(value) => handleSelectOrganization(value)}
                    >
                      {getListOrganization?.data?.map((user: any) => (
                        <Select.Option key={user._id} value={user._id}>
                          {user.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Form>
              ) : (
                ""
              )}
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
                    href="/manage/profile"
                    className="text-[16px]  text-left w-full p-[15px] hover:text-[#ffffff] hover:bg-[#1b5aff] cursor-pointer"
                  >
                    Edit account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    className="text-[16px]  text-left w-full p-[15px] hover:text-[#ffffff] hover:bg-[#1b5aff] cursor-pointer"
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
