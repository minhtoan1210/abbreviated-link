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
import { Drawer, Space, Switch, Tooltip } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./style.css";
import { ListLinkhType } from "@/app/manage/dashboard/component/checkboxes";
import dayjs from "dayjs";
import { DDMMYY } from "@/constants/type";
import {
  useDeleteLinkMutation,
  useUpdateLinkMutation,
} from "@/queries/useLink";
import { useToast } from "@/hooks/use-toast";
import ComponentIconQR from "./componentQR";
import { useRef, useState } from "react";

export default function CardCuttlyShortLink({
  itemLink,
}: {
  itemLink: ListLinkhType;
}) {
  const { mutate } = useDeleteLinkMutation();
  const { mutate: updateLinkMutation, isPending } = useUpdateLinkMutation();
  const { toast } = useToast();
  const [openDrawer, setOpenDrawer] = useState(false);
  const copyText = useRef(null);
  const [checked, setChecked] = useState(itemLink.active);

  const handleRemove = (value: ListLinkhType) => {
    mutate(value._id);
    toast({
      description: "Xóa thành công",
      className: "text-[18px] !important toast",
    });
  };

  const handleOpenDrawer = (item: any) => {
    setOpenDrawer(true);
  };

  const handleCopy = async (value: ListLinkhType) => {
    await navigator.clipboard.writeText(value.original);
  };

  const handleCheckSwitch = (value: any) => {
    console.log("value", value);

    updateLinkMutation({
      id: itemLink._id,
      body: {
        active: value,
      },
    });

    setChecked(value);
  };

  const IconDiscover = [
    {
      title: "Copy",
      icon: <Copy />,
      ref: copyText,
      click: (value: ListLinkhType) => handleCopy(value),
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
      component: <ComponentIconQR />,
    },
    {
      title: "Remove this link",
      icon: <Trash2 />,
      click: (value: ListLinkhType) => handleRemove(value),
    },
  ];

  return (
    <div className="discover-url">
      <div className="discover-url-date">
        <Space direction="vertical">
          <Switch
            checkedChildren={<CheckOutlined />}
            checked={checked}
            onChange={handleCheckSwitch}
            loading={isPending}
          />
        </Space>
        <div className="text-date">
          {dayjs(itemLink.createdAt).format(DDMMYY)}
        </div>
      </div>
      <div className="discover-url-title">
        <img src="../favicon-32x32.png" alt="" />
        <span>Cuttly | URL Shortener, Branded URLs, Link Management, API </span>
      </div>
      <Link href="/" className="discover-url-link">
        {itemLink?.original}
      </Link>
      <div className="discover-url-linkrandedshort">
        <Link href={itemLink?.original} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            {itemLink?.shorten}
          </a>
        </Link>
      </div>
      <div className="discover-url-addtag">
        <div className="btn-icon">
          {IconDiscover.map((item, key) => (
            <div key={key}>
              <Tooltip title={item.title}>
                <div
                  className="mr-[4px]"
                  onClick={
                    item.click
                      ? () => item.click(itemLink)
                      : item.component
                      ? () => handleOpenDrawer(item)
                      : undefined
                  }
                >
                  {item.icon}
                </div>
                {item?.component ? (
                  <Drawer
                    title={item.title}
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                  >
                    "hehe"
                  </Drawer>
                ) : (
                  ""
                )}
              </Tooltip>
            </div>
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
