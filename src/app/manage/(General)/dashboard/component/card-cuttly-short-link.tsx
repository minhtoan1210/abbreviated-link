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
import { Drawer, Input, Space, Switch, Tooltip } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./style.css";
import dayjs from "dayjs";
import { DDMMYY } from "@/constants/type";
import {
  useDeleteLinkMutation,
  useUpdateLinkMutation,
} from "@/queries/useLink";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ListLinkhType } from "./checkboxes";
import ComponentQrCode from "@/app/manage/(btnIcon)/qr-code/page";
import { toast } from "react-toastify";
import { Controller } from "react-hook-form";

export default function CardCuttlyShortLink({
  itemLink,
  control,
  name
}: {
  itemLink: ListLinkhType;
  control: any;
  name: string
}) {
  const { mutate } = useDeleteLinkMutation();
  const { mutate: updateLinkMutation, isPending } = useUpdateLinkMutation();
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const copyText = useRef(null);
  const [value, setValue] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const inputRefCardCuttly = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        inputRefCardCuttly.current &&
        "contains" in inputRefCardCuttly.current
      ) {
        if (
          inputRefCardCuttly.current &&
          !inputRefCardCuttly.current.contains(event.target as Node)
        ) {
          setIsEditing(false);
        }
      }
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  const handleRemove = (value: ListLinkhType) => {
    mutate(value._id);
    toast.success("Thêm thành công");
  };

  const handleOpenDrawer = (item: any) => {
    setOpenDrawer(true);
  };

  const handleCopy = async (value: ListLinkhType) => {
    await navigator.clipboard.writeText(value.original);
  };

  // const handleCheckSwitch = (value: any) => {
  //   updateLinkMutation({
  //     id: itemLink._id,
  //     body: {
  //       active: value,
  //     },
  //   });

  //   setChecked(value);
  // };

  const handleChangUrl = (value: ListLinkhType) => {
    router.push(`/manage/change-url-name?id=${value._id}`);
  };

  const handleInputAddTag = async (value: any) => {
    setValue(value);
    await updateLinkMutation({
      id: itemLink._id,
      body: {
        addtag: value,
      },
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleInputAddTag(value);
      setIsEditing(false)
      setValue("");
    }
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
      click: (value: ListLinkhType) => handleChangUrl(value),
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
      component: <ComponentQrCode />,
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
          <Controller
            name={`${name}.${itemLink._id}`}
            control={control}
            render={({ field: { value, onChange } }) => (
              <Switch
                checkedChildren={<CheckOutlined />}
                checked={!!value}
                onChange={(checked) => onChange(checked ? itemLink._id : false)}
                loading={isPending}
              />
            )}
          />
        </Space>
        <div className="text-date">
          {dayjs(itemLink.createdAt).format(DDMMYY)}
        </div>
      </div>
      <div className="discover-url-title">
        <img src={itemLink?.favicon} alt="" />
        <span>Cuttly | URL Shortener, Branded URLs, Link Management, API </span>
      </div>
      <Link href="/" className="discover-url-link">
        {itemLink?.original}
      </Link>
      <div className="discover-url-linkrandedshort">
        <Link href={itemLink?.original} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            {itemLink?.short_link}
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
                    {item?.component}
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
          {isEditing ? (
            <Input
              ref={inputRefCardCuttly}
              type="text"
              value={value}
              onChange={(e) => handleInputAddTag(e.target.value)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <span onClick={() => setIsEditing(true)}>
              {itemLink?.addtag !== "" ? '#' + itemLink.addtag : "#add tag"}
            </span>
          )}
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
