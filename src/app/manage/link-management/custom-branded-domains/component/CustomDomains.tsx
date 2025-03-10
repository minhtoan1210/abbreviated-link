"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";

const helpItem = [
  {
    title: "What is custom domain ?",
    herf: "/",
  },
  {
    title: "How many custom domains can I add in Cuttly ?",
    herf: "/",
  },
  {
    title: "Can I use any domain as my custom domain ?",
    herf: "/",
  },
  {
    title: "Can I use any subdomain as my custom domain ?",
    herf: "/",
  },
  {
    title: "Can I add a domain where I have my website ?",
    herf: "/",
  },
  {
    title: "How to add custom domain in Cuttly ?",
    herf: "/",
  },
  {
    title:
      "Where to find the DNS A parameter needed to configure custom domain ?",
    herf: "/",
  },
  {
    title:
      "Where to find the DNS TXT parameter needed to configure custom domain ?",
    herf: "/",
  },
  {
    title: "Why has my domain been rejected ?",
    herf: "/",
  },
  {
    title: "Why is my domain still being verified ?",
    herf: "/",
  },
  {
    title: "I do not have my own domain - where can I buy it ?",
    herf: "/",
  },
  {
    title:
      "How do I set redirect for index / root and 404 for my custom domain ?",
    herf: "/",
  },
  {
    title: "How do I set up SSL and HTTPS for my custom domain ?",
    herf: "/",
  },
  {
    title: "How do I remove my custom domain ?",
    herf: "/",
  },
  {
    title: "Will my links still work after I delete my domain ?",
    herf: "/",
  },
  {
    title:
      "Why do I need to configure DNS A and DNS TXT for my custom domain ?",
    herf: "/",
  },
  {
    title:
      "Can I replace my custom domain for existing links with another custom domain ?",
    herf: "/",
  },
];

export default function CustomDomains() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <div className="custom-domains" onClick={showDrawer}>
        Custom domains - Help
      </div>
      <Drawer title="Custom domains - Help" onClose={onClose} open={open} className="drawer-help">
        {helpItem.map((item, key) => (
          <Link href={item.herf} key={key}>
            {item.title}
          </Link>
        ))}
      </Drawer>
    </>
  );
}
