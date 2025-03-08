"use client";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useCreateLinkMutation, useLinkList } from "@/queries/useLink";
import CardCuttlyShortLink from "./card-cuttly-short-link";
import { toast } from "react-toastify";

export type ListLinkhType = {
  calls: number;
  createdAt: string;
  original: string;
  shorten: string;
  short_link: string;
  updatedAt: string;
  user: string;
  __v: 0;
  _id: string;
  active: boolean;
  favicon: string;
};

export default function Checkboxes() {
  const inputRef = useRef<any>(null);
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [isCheck, setIsCheck] = useState(false);
  const { mutateAsync, isPending } = useCreateLinkMutation();
  const { data: linkList, refetch } = useLinkList(pagination);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    const activeItems = linkList?.some(
      (item: ListLinkhType) => item.active === true
    );
    setIsCheck(activeItems);
  }, [linkList]);

  const handleClickAdd = async () => {
    try {
      await mutateAsync({
        original: inputRef.current?.input.value as string,
      });
      toast.success("Thêm thành công");
    } catch (error: any) {
      toast.error(`Lỗi: ${error.toString()}`);
    }
  };

  return (
    <>
      <div className="box">
        <div className="left">
          <div className="title">
            To do any of the following, first select short links using the
            checkboxes.
          </div>
          <div
            className={isCheck ? "active btn-create-link" : "btn-create-link"}
          >
            Create Link-in-Bio
          </div>
          <div className={isCheck ? "active btn-urls" : "btn-urls"}>
            Hide selected URLs
          </div>
          <div className={isCheck ? "active btn-favourites" : "btn-favourites"}>
            add to favourites
          </div>
          <div
            className={isCheck ? "active btn-selected-url" : "btn-selected-url"}
          >
            bulk selected URLs
          </div>
          <div className="input">
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="search by tag"
            />
          </div>
        </div>
        <div className="right">
          <div className="input-shorten">
            <Input placeholder="Paste long url and shorten it" ref={inputRef} />
            <Button
              loading={isPending}
              onClick={handleClickAdd}
              className="btn-shorten"
            >
              {isPending ? "" : "Shorten"}
            </Button>
          </div>
          {linkList?.map((item: ListLinkhType, key: number) => {
            return (
              <div key={key}>
                <CardCuttlyShortLink itemLink={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
