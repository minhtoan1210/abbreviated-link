"use client";
import React, { useRef, useState } from "react";
import "./style.css";
import Link from "next/link";
import { Copy, QrCode, Trash2 } from "lucide-react";
import { ListLinkhType } from "../../dashboard/component/checkboxes";
import { Drawer, Tooltip } from "antd";
import './style.css'
import ComponentQrCode from "@/app/manage/(btnIcon)/qr-code/page";

const itemData: any = {
  _id: "67ca9969d849a3cc62e14bc8",
  user: "67b98b5288468829d58b0919",
  original:
    "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
  shorten: "VVmjpY",
  active: false,
  calls: 0,
  createdAt: "2025-03-07T06:59:53.248Z",
  updatedAt: "2025-03-08T08:41:19.204Z",
  __v: 0,
  short_link: "http://localhost:3000/VVmjpY",
};

export default function page() {
  const copyText = useRef(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleCopy = async (value: ListLinkhType) => {
    await navigator.clipboard.writeText(value.original);
  };

  const handleRemove = (value: ListLinkhType) => {
    console.log("Đã Click");
  };

  const handleOpenDrawer = (item: any) => {
    setOpenDrawer(true);
  };

  const IconDiscover = [
    {
      title: "Copy",
      icon: <Copy />,
      ref: copyText,
      click: (value: ListLinkhType) => handleCopy(value),
    },

    {
      title: "QR code",
      icon: <QrCode />,
      component: <ComponentQrCode />,
    },
    {
      title: "Remove this link",
      icon: <Trash2 />,
      click: (value: ListLinkhType) => handleRemove(value),
    },
  ];
  return (
    <div className="bulk-links">
      <div className="title">Your bulk links</div>
      <div className="item">
        <div className="item-link">
          <Link href="#" className="link">
            https://cutt.ly/bulk/QoBAU
          </Link>
          <div className="item-date">2025-03-03</div>
        </div>
        <div className="item-text">
          <span>1</span> URL(s) in the bulk links
        </div>
        <div className="item-btn">
          {IconDiscover.map((item, key) => (
            <div key={key}>
              <Tooltip title={item.title}>
                <div
                  className="mr-[4px]"
                  onClick={
                    item.click
                      ? () => item.click(itemData)
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
                    {item?.component}
                  </Drawer>
                ) : (
                  ""
                )}
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
