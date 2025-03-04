"use client";

import Link from "next/link";
import {
  ChartNoAxesColumn,
  CircleCheck,
  Clock,
  Code,
  Copy,
  Facebook,
  Fingerprint,
  FolderKanban,
  KeyRound,
  Mouse,
  MoveDown,
  Plus,
  QrCode,
  Settings,
  TabletSmartphone,
  TestTubeDiagonal,
  Trash2,
  Twitter,
} from "lucide-react";
import { Space, Switch, Tooltip } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./style.css";

export default function CardCuttlyShortLink() {
  const IconDiscover = [
    {
      title: "Copy",
      icon: <Copy />,
    },
    {
      title: "Change url alias / name",
      icon: <Fingerprint />,
    },
    {
      title: "UTM",
      icon: <Code />,
    },
    {
      title: "Set a password",
      icon: <KeyRound />,
    },
    {
      title: "Mobile link redirects",
      icon: <TabletSmartphone />,
    },
    {
      title: "Change url unique clicks",
      icon: <Mouse />,
    },
    {
      title: "Manage title",
      icon: <FolderKanban />,
    },
    {
      title: "Link redirect expiration",
      icon: <Clock />,
    },
    {
      title: "Pixel settings",
      icon: <Settings />,
    },
    {
      title: "Test A/B",
      icon: <TestTubeDiagonal />,
    },
    {
      title: "QR code",
      icon: <QrCode />,
    },
    {
      title: "Remove this link",
      icon: <Trash2 />,
    },
  ];
  return (
    <div className="discover-url">
      <div className="discover-url-date">
        <Space direction="vertical">
          <Switch checkedChildren={<CheckOutlined />} defaultChecked />
        </Space>
        <div className="text-date">2025-02-26</div>
      </div>
      <div className="discover-url-title">
        <img src="../favicon-32x32.png" alt="" />
        <span>Cuttly | URL Shortener, Branded URLs, Link Management, API </span>
      </div>
      <Link href="/" className="discover-url-link">
        https://cutt.ly/resources/support/short-link-features/{" "}
      </Link>
      <div className="discover-url-linkrandedshort">
        <Link href="/">cutt.ly/URL-Shortener-Features</Link>
      </div>
      <div className="discover-url-addtag">
        <div className="btn-icon">
          {IconDiscover.map((item, key) => (
            <Tooltip title={item.title} key={key}>
              <Link href='/' className="mr-[4px]">{item.icon}</Link>
            </Tooltip>
          ))}
        </div>
        <Link href="/" className="ad_ads">
          Upgrade
        </Link>
        <div className="btn-addtag">
          <span>#add tag</span>
          <div className="clicks">
            <ChartNoAxesColumn />
            <span>259</span>
            <span>clicks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
