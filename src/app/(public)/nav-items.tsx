"use client";

import Link from "next/link";
const menuItems = [
  {
    title: "URL Shortener",
    href: "/", 
  },
  {
    title: "Available features",
    href: "/url-shortener-features",
  },
  {
    title: "Preview mode",
    href: "/preview",
  },
  {
    title: "CUTT URL button",
    href: "/cutt-url-button", 
  },
  {
    title: "Check url",
    href: "/verify",
  },
  {
    title: "API",
    href: "/cuttly-api",
  },
  {
    title: "Integrations",
    href: "/resources/integrations",
  },
  {
    title: "Abuse report",
    href: "report",
  },
];

export default function NavItems({ className }: { className?: string }) {
  return menuItems.map((item) => {
    return (
      <Link href={item.href} key={item.href} className={className}>
        {item.title}
      </Link>
    );
  });
}
