import React from "react";
import Link from "next/link";
import {
  DashboardOutlined,
  ExportOutlined,
  LinkOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  AlignJustify,
  Braces,
  Building,
  ChartNoAxesColumn,
  EyeOff,
  Globe,
  LogOut,
  NotebookText,
  Settings,
  Star,
  Tags,
  UsersRound,
} from "lucide-react";
import "./style.css";

type MenuItem = Required<MenuProps>["items"][number] & { roles?: string[] };

export const menuItems: MenuItem[] = [
  {
    key: "General",
    label: "General",
    type: "group",
    children: [
      {
        key: "dashboard",
        icon: <DashboardOutlined className="icon-menuItem" />,
        label: (
          <Link href="/manage/dashboard" className="a-menuItem">
            Dashboard
          </Link>
        ),
        roles: ["admin", "user"],
      },
      {
        key: "link-management",
        label: <span className="a-menuItem">Link management</span>,
        icon: <LinkOutlined className="icon-menuItem" />,
        roles: ["admin", "user"],
        children: [
          {
            key: "link-management-dashboard",
            icon: <DashboardOutlined className="icon-menuItem" />,
            label: (
              <Link href="/manage/dashboard" className="a-menuItem">
                Dashboard
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "aggregated-link-analytics",
            icon: <ChartNoAxesColumn className="icon-menuItem" />,
            label: (
              <Link href="/option10" className="a-menuItem">
                Aggregated Link Analytics
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "custom-branded-domains",
            icon: <Globe className="icon-menuItem" />,
            label: (
              <Link
                href="/manage/link-management/custom-branded-domains"
                className="a-menuItem"
              >
                Custom Branded Domains
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "favourites",
            icon: <Star className="icon-menuItem" />,
            label: (
              <Link
                href="/manage/link-management/favourites"
                className="a-menuItem"
              >
                Favourites
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "hidden-urls",
            icon: <EyeOff className="icon-menuItem" />,
            label: (
              <Link
                href="/manage/link-management/hidden-urls"
                className="a-menuItem"
              >
                Hidden URLs
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "api-urls",
            icon: <Braces className="icon-menuItem" />,
            label: (
              <Link
                href="/manage/link-management/api-urls"
                className="a-menuItem"
              >
                API URLs
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "tags",
            icon: <Tags className="icon-menuItem" />,
            label: (
              <Link href="/manage/link-management/tags" className="a-menuItem">
                Tags
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "bulk-links",
            icon: <NotebookText className="icon-menuItem" />,
            label: (
              <Link
                href="/manage/link-management/bulk-links"
                className="a-menuItem"
              >
                bulk links
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "export-your-urls",
            icon: <ExportOutlined className="icon-menuItem" />,
            label: (
              <Link href="/Export" className="a-menuItem">
                Export your URLs
              </Link>
            ),
            roles: ["admin", "user"],
          },
          {
            key: "bulk-shortening",
            icon: <ExportOutlined className="icon-menuItem" />,
            label: (
              <Link href="/Bulk" className="a-menuItem">
                Bulk shortening (CSV)
              </Link>
            ),
            roles: ["admin", "user"],
          },
        ],
      } as any,
      {
        key: "limits-volume",
        icon: <AlignJustify className="icon-menuItem" />,
        label: (
          <Link href="/manage/limits" className="a-menuItem">
            Limits / volume
          </Link>
        ),
        roles: ["admin", "user"],
      },
    ],
  },
  {
    key: "Team",
    label: "Team",
    type: "group",
    children: [
      {
        key: "your-teams",
        icon: <TeamOutlined className="icon-menuItem" />,
        label: (
          <Link href="/manage/your-teams" className="a-menuItem">
            Your teams
          </Link>
        ),
        roles: ["admin", "user"],
      },
    ],
  },
  {
    key: "Organization",
    label: "Organization",
    type: "group",
    children: [
      {
        key: "Organization_user",
        icon: <Building className="icon-menuItem" />,
        label: (
          <Link href="/manage/organization/:token" className="a-menuItem">
            Organization
          </Link>
        ),
        roles: ["admin","user"],
      },
      // {
      //   key: "Organization_admin",
      //   icon: <Building className="icon-menuItem" />,
      //   label: (
      //     <Link href="/manage/organization/" className="a-menuItem">
      //       Organization
      //     </Link>
      //   ),
      //   roles: ["admin",],
      // },
    ],
  },
  {
    key: "User",
    label: "User",
    type: "group",
    children: [
      {
        key: "User",
        icon: <UsersRound className="icon-menuItem" />,
        label: (
          <Link href="/manage/user" className="a-menuItem">
            User
          </Link>
        ),
        roles: ["admin", "user"],
      },
    ],
  },
  {
    key: "Setting",
    label: "Setting",
    type: "group",
    children: [
      {
        key: "Setting",
        icon: <Settings  className="icon-menuItem" />,
        label: (
          <Link href="/manage/setting" className="a-menuItem">
            Setting
          </Link>
        ),
        roles: ["admin", "user"],
      },
    ],
  },
  {
    key: "your-account",
    label: "Your account",
    type: "group",
    children: [
      {
        key: "your-account",
        icon: <Settings className="icon-menuItem" />,
        label: (
          <Link href="/dashboard" className="a-menuItem">
            Edit account
          </Link>
        ),
        roles: ["admin", "user"],
      },
      {
        key: "log-out",
        icon: <LogOut className="icon-menuItem" />,
        label: (
          <Link href="/dashboard" className="a-menuItem">
            Log out
          </Link>
        ),
        roles: ["admin", "user"],
      },
    ],
  },
];

export const filterMenuByRole = (
  menuItems: MenuItem[],
  userRoles: string[],
  token: string
): MenuItem[] => {
  return menuItems
    .filter(item => !item.roles || item.roles.some(role => userRoles.includes(role)))
    .map((item: any) => ({
      ...item,
      label:
        typeof item.label === "object" && "props" in item.label ? (
          React.cloneElement(item.label, {
            href: item.label.props.href?.replace(":token", token),
          })
        ) : (
          item.label
        ),
      children: item.children ? filterMenuByRole(item.children, userRoles, token) : undefined
    }));
};