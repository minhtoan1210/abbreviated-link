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
        label: <Link href="/dashboard" className="a-menuItem">Dashboard</Link>,
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
            label: <Link href="/dashboard" className="a-menuItem">Dashboard</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "aggregated-link-analytics",
            icon: <ChartNoAxesColumn className="icon-menuItem" />,
            label: <Link href="/option10" className="a-menuItem">Aggregated Link Analytics</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "custom-branded-domains",
            icon: <Globe className="icon-menuItem" />,
            label: <Link href="/manage/link-management/custom-branded-domains" className="a-menuItem">Custom Branded Domains</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "favourites",
            icon: <Star className="icon-menuItem" />,
            label: <Link href="/Favourites" className="a-menuItem">Favourites</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "hidden-urls",
            icon: <EyeOff className="icon-menuItem" />,
            label: <Link href="/Hidden" className="a-menuItem">Hidden URLs</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "api-urls",
            icon: <Braces className="icon-menuItem" />,
            label: <Link href="/API" className="a-menuItem">API URLs</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "tags",
            icon: <Tags className="icon-menuItem" />,
            label: <Link href="/Tags" className="a-menuItem">Tags</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "bulk-links",
            icon: <NotebookText className="icon-menuItem" />,
            label: <Link href="/bulk" className="a-menuItem">bulk links</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "export-your-urls",
            icon: <ExportOutlined className="icon-menuItem" />,
            label: <Link href="/Export" className="a-menuItem">Export your URLs</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "bulk-shortening",
            icon: <ExportOutlined className="icon-menuItem" />,
            label: <Link href="/Bulk" className="a-menuItem">Bulk shortening (CSV)</Link>,
            roles: ["admin", "user"],
          },
        ],
      } as any,
      {
        key: "limits-volume",
        icon: <AlignJustify className="icon-menuItem" />,
        label: <Link href="/limits" className="a-menuItem">Limits / volume</Link>,
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
        label: <Link href="/Your" className="a-menuItem">Your teams</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "create-new-team",
        icon: <FilePlus className="icon-menuItem" />,
        label: <Link href="/Create" className="a-menuItem">Create new team</Link>,
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
        label: <Link href="/Your" className="a-menuItem">Link-in-bio</Link>,
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
          <Link href="/Your" className="a-menuItem">
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
        label: <Link href="/dashboard" className="a-menuItem">API</Link>,
        roles: ["admin", "user"],
        children: [
          {
            key: "api-documentation",
            icon: <ApiOutlined className="icon-menuItem" />,
            label: <Link href="/dashboard" className="a-menuItem">API documentation</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "api-key",
            icon: <ApiOutlined className="icon-menuItem" />,
            label: <Link href="/option10" className="a-menuItem">API Key</Link>,
            roles: ["admin", "user"],
          },
        ],
      },
      {
        key: "more-more",
        label: <span className="a-menuItem">More</span>,
        icon: <Ellipsis className="icon-menuItem" />,
        roles: ["admin", "user"],
        children: [
          {
            key: "preview-mode",
            icon: <Eye className="icon-menuItem" />,
            label: <Link href="/dashboard" className="a-menuItem">Preview mode</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "check-url",
            icon: <SearchCheck className="icon-menuItem" />,
            label: <Link href="/option10" className="a-menuItem">Check url</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "cutt-url-button",
            icon: <Unlink className="icon-menuItem" />,
            label: <Link href="/custom" className="a-menuItem">CUTT URL button</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "available-features",
            icon: <Inbox className="icon-menuItem" />,
            label: <Link href="/Favourites" className="a-menuItem">Available features</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "unsubscribe-newsletter",
            icon: <ShieldMinus className="icon-menuItem" />,
            label: <Link href="/Hidden" className="a-menuItem">Unsubscribe newsletter</Link>,
            roles: ["admin", "user"],
          },
        ],
      } as any,
      {
        key: "ENlanguage",
        label: <span className="a-menuItem">EN</span>,
        icon: <Globe className="icon-menuItem" />,
        roles: ["admin", "user"],
        children: [
          {
            key: "EN",
            label: <Link href="/dashboard" className="a-menuItem">EN | English</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "PL",
            label: <Link href="/option10" className="a-menuItem">PL | Polski</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "AR",
            label: <Link href="/custom" className="a-menuItem">AR | عربى</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "DE",
            label: <Link href="/Favourites" className="a-menuItem">DE | Deutsch</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "ES",
            label: <Link href="/Hidden" className="a-menuItem">ES | Español</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "FR",
            label: <Link href="/Hidden" className="a-menuItem">FR | Français</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "HI",
            label: <Link href="/Hidden" className="a-menuItem">HI | हिन्दी</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "IT",
            label: <Link href="/Hidden" className="a-menuItem">IT | Italiano</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "JA",
            label: <Link href="/Hidden" className="a-menuItem">JA | 日本語</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "KO",
            label: <Link href="/Hidden" className="a-menuItem">KO | 한국어</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "NL",
            label: <Link href="/Hidden" className="a-menuItem">NL | Nederlands</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "PT",
            label: <Link href="/Hidden" className="a-menuItem">PT | Português</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "RU",
            label: <Link href="/Hidden" className="a-menuItem">RU | Русский</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "TR",
            label: <Link href="/Hidden" className="a-menuItem">TR | Türkçe</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "UK",
            label: <Link href="/Hidden" className="a-menuItem">UK | Українська</Link>,
            roles: ["admin", "user"],
          },
          {
            key: "ZH",
            label: <Link href="/Hidden" className="a-menuItem">ZH | 中文</Link>,
            roles: ["admin", "user"],
          },
        ],
      },
      {
        key: "integrations",
        icon: <CircleHelp  className="icon-menuItem" />,
        label: <Link href="/dashboard" className="a-menuItem">Integrations</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "support",
        icon: <CircleHelp className="icon-menuItem" />,
        label: <Link href="/dashboard" className="a-menuItem">Support</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "abuse-report",
        icon: <CircleAlert className="icon-menuItem" />,
        label: <Link href="/dashboard" className="a-menuItem">Abuse report</Link>,
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
        label: <Link href="/dashboard" className="a-menuItem">Edit account</Link>,
        roles: ["admin", "user"],
      },
      {
        key: "log-out",
        icon: <LogOut className="icon-menuItem" />,
        label: <Link href="/dashboard" className="a-menuItem">Log out</Link>,
        roles: ["admin", "user"],
      },
    ],
  },
];
