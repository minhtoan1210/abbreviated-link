"use client";
import { useTagList } from "@/queries/useTag";
import { Key } from "lucide-react";
import Link from "next/link";
import React from "react";

type itemType = {
  active: boolean;
  addtag: string;
  calls: number;
  createdAt: string;
  favicon: string;
  id: string;
  original: string;
  shorten: string;
  updatedAt: string;
  user: string;
  _id: string;
  __v: number;
};

export default function CardItem() {
  const { data: tagList } = useTagList();

  return (
    <>
      {tagList?.map((item: itemType, key: number) => (
        <div className="item" key={key}>
          <div className="item-tag">{item?.addtag}</div>
          <div className="item-text">{item?.original}</div>
          <Link href={item?.original} className="item-shorten" legacyBehavior>
            <a
              className="item-shorten"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item?.shorten}
            </a>
          </Link>
        </div>
      ))}
    </>
  );
}
