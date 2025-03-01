import React from "react";
import Link from "next/link";
import {
  ApiOutlined,
  DashboardOutlined,
  ExportOutlined,
  LinkOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  AlignJustify,
  Braces,
  ChartNoAxesColumn,
  CircleAlert,
  CircleHelp,
  Ellipsis,
  Eye,
  EyeOff,
  FilePlus,
  Globe,
  Inbox,
  Layers,
  Layers2,
  LogOut,
  NotebookText,
  SearchCheck,
  Settings,
  ShieldMinus,
  Star,
  Tags,
  Unlink,
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
        label: <Link href="/dashboard">Dashboard</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "link-management",
        label: "Link management",
        icon: <LinkOutlined className="icon-menuItem" />,
        roles: ["admin", "user"],
        children: [
          {
            key: "link-management-dashboard",
            icon: <DashboardOutlined className="icon-menuItem" />,
            label: <Link href="/dashboard">Dashboard</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "aggregated-link-analytics",
            icon: <ChartNoAxesColumn className="icon-menuItem" />,
            label: <Link href="/option10">Aggregated Link Analytics</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "custom-branded-domains",
            icon: <Globe className="icon-menuItem" />,
            label: <Link href="/custom">Custom Branded Domains</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "favourites",
            icon: <Star className="icon-menuItem" />,
            label: <Link href="/Favourites">Favourites</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "hidden-urls",
            icon: <EyeOff className="icon-menuItem" />,
            label: <Link href="/Hidden">Hidden URLs</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "api-urls",
            icon: <Braces className="icon-menuItem" />,
            label: <Link href="/API">API URLs</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "tags",
            icon: <Tags className="icon-menuItem" />,
            label: <Link href="/Tags">Tags</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "bulk-links",
            icon: <NotebookText className="icon-menuItem" />,
            label: <Link href="/bulk">bulk links</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "export-your-urls",
            icon: <ExportOutlined className="icon-menuItem" />,
            label: <Link href="/Export">Export your URLs</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "bulk-shortening",
            icon: <ExportOutlined className="icon-menuItem" />,
            label: <Link href="/Bulk">Bulk shortening (CSV)</Link>,
            roles: ["admin", "user"],
          },
        ],
      } as any,
      {
        key: "limits-volume",
        icon: <AlignJustify className="icon-menuItem" />,
        label: <Link href="/limits">Limits / volume</Link>,
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
        label: <Link href="/Your">Your teams</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "create-new-team",
        icon: <FilePlus className="icon-menuItem" />,
        label: <Link href="/Create">Create new team</Link>,
        roles: ["admin", "user"],
      },
    ],
  },
  {
    key: "Link-in-bio",
    label: "Link-in-bio",
    type: "group",
    children: [
      {
        key: "Link-in-bio",
        icon: <Layers className="icon-menuItem" />,
        label: <Link href="/Your">Link-in-bio</Link>,
        roles: ["admin", "user"],
      },
    ],
  },
  {
    key: "Cuttly Surveys",
    label: "Cuttly Surveys",
    type: "group",
    children: [
      {
        key: "Surveys-new",
        icon: <Layers className="icon-menuItem" />,
        label: (
          <Link href="/Your">
            Surveys <span>New</span>
          </Link>
        ),
        roles: ["admin", "user"],
      },
    ],
  },
  {
    key: "More",
    label: "More",
    type: "group",
    children: [
      {
        key: "api",
        icon: <ApiOutlined className="icon-menuItem" />,
        label: <Link href="/dashboard">API</Link>,
        roles: ["admin", "user"],
        children: [
          {
            key: "api-documentation",
            icon: <ApiOutlined className="icon-menuItem" />,
            label: <Link href="/dashboard">API documentation</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "api-key",
            icon: <ApiOutlined className="icon-menuItem" />,
            label: <Link href="/option10">API Key</Link>,
            roles: ["admin", "user"],
          },
        ],
      },
      {
        key: "more-more",
        label: "More",
        icon: <Ellipsis className="icon-menuItem" />,
        roles: ["admin", "user"],
        children: [
          {
            key: "preview-mode",
            icon: <Eye className="icon-menuItem" />,
            label: <Link href="/dashboard">Preview mode</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "check-url",
            icon: <SearchCheck className="icon-menuItem" />,
            label: <Link href="/option10">Check url</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "cutt-url-button",
            icon: <Unlink className="icon-menuItem" />,
            label: <Link href="/custom">CUTT URL button</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "available-features",
            icon: <Inbox className="icon-menuItem" />,
            label: <Link href="/Favourites">Available features</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "unsubscribe-newsletter",
            icon: <ShieldMinus className="icon-menuItem" />,
            label: <Link href="/Hidden">Unsubscribe newsletter</Link>,
            roles: ["admin", "user"],
          },
        ],
      } as any,
      {
        key: "ENlanguage",
        label: "EN",
        icon: <Globe className="icon-menuItem" />,
        roles: ["admin", "user"],
        children: [
          {
            key: "EN",
            label: <Link href="/dashboard">EN | English</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "PL",
            label: <Link href="/option10">PL | Polski</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "AR",
            label: <Link href="/custom">AR | عربى</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "DE",
            label: <Link href="/Favourites">DE | Deutsch</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "ES",
            label: <Link href="/Hidden">ES | Español</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "FR",
            label: <Link href="/Hidden">FR | Français</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "HI",
            label: <Link href="/Hidden">HI | हिन्दी</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "IT",
            label: <Link href="/Hidden">IT | Italiano</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "JA",
            label: <Link href="/Hidden">JA | 日本語</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "KO",
            label: <Link href="/Hidden">KO | 한국어</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "NL",
            label: <Link href="/Hidden">NL | Nederlands</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "PT",
            label: <Link href="/Hidden">PT | Português</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "RU",
            label: <Link href="/Hidden">RU | Русский</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "TR",
            label: <Link href="/Hidden">TR | Türkçe</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "UK",
            label: <Link href="/Hidden">UK | Українська</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "ZH",
            label: <Link href="/Hidden">ZH | 中文</Link>,
            roles: ["admin", "user"],
          },
        ],
      },
      {
        key: "integrations",
        icon: <CircleHelp  className="icon-menuItem" />,
        label: <Link href="/dashboard">Integrations</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "support",
        icon: <CircleHelp className="icon-menuItem" />,
        label: <Link href="/dashboard">Support</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "abuse-report",
        icon: <CircleAlert className="icon-menuItem" />,
        label: <Link href="/dashboard">Abuse report</Link>,
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
        label: <Link href="/dashboard">Edit account</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "log-out",
        icon: <LogOut className="icon-menuItem" />,
        label: <Link href="/dashboard">Log out</Link>,
        roles: ["admin", "user"],
      },
    ],
  },
];
