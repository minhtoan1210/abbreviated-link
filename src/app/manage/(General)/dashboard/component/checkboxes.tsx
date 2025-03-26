"use client";
import { Input, Button, Drawer, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useCreateLinkMutation, useLinkList } from "@/queries/useLink";
import CardCuttlyShortLink from "./card-cuttly-short-link";
import { useForm } from "react-hook-form";
import {
  updateFavouritesSchema,
  updateFavouritesType,
} from "@/schemaValidations/favourites.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateFavouritesMutation } from "@/queries/useFavourites";
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
  addtag: string;
  hidden_urls:boolean;
};

export default function Checkboxes() {
  const [inputValue, setInputValue] = useState("");
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [isCheck, setIsCheck] = useState(false);
  const { mutateAsync, isPending } = useCreateLinkMutation();
  const { data: linkList, refetch } = useLinkList(pagination);
  const [open, setOpen] = useState(false);
  const updateFavouritesMutation = useUpdateFavouritesMutation();

  const { control, watch, reset } = useForm<any>({
    resolver: zodResolver(updateFavouritesSchema),
    defaultValues: {
      favourites: {},
    },
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, []);

  const handleClickAdd = async () => {
    try {
      await mutateAsync({
        original: inputValue as string,
      });
      setInputValue("");
      toast.success("Thêm thành công");
    } catch (error: any) {
      toast.error(`Lỗi: ${error.toString()}`);
    }
  };

  const handleTableChange = (page: number, pageSize?: number) => {
    setPagination({ page: page, limit: pageSize || pagination.limit });
  };

  const selectedLinksArray = Object.entries(watch("favourites") || {})
    .filter(([_, value]) => value)
    .map(([key]) => key);

  const onSubmitSwitch = async () => {
    try {
      await updateFavouritesMutation.mutateAsync({
        favourites: selectedLinksArray,
      });
      toast.success("Cập nhật Thành Công");
      reset({ favourites: {} })
    } catch (error) {
      toast.error("Cập nhật Thất Bại");
    }
  };

  if (!linkList?.data) return <p>Đang tải dữ liệu...</p>;

  return (
    <>
      <div className="box">
        <div className="left">
          <div className="search">
            <div className="title">
              To do any of the following, first select short links using the
              checkboxes.
            </div>
            <div
              className={
                selectedLinksArray.length > 0
                  ? "active btn-create-link"
                  : "btn-create-link"
              }
              onClick={showDrawer}
            >
              Create Link-in-Bio
            </div>
            <Drawer
              title="Link-in-Bio"
              onClose={onClose}
              open={open}
              className="drawer-link-in-bio"
            >
              <p>
                Create your own Link-in-Bio microsite for selected short links.
                You will be able to edit it later in the Link-in-Bio section,
                you will also be able to add more short links to it, image,
                youtube / vimeo video, edit its appearance and much more.
              </p>
              <div className="text-create">
                <span>Create:</span>
                <div className="btn-youralias">cutt.ly/bio/your-alias</div>
              </div>
              <div className="text-sub">
                Tu use following features you need active subscription plan:
              </div>
              <div className="text-your-domain">your-domain/bio/your-alias</div>
              <div className="text-your-alias">cutt.bio/your-alias</div>
            </Drawer>
            <div
              className={
                selectedLinksArray.length > 0 ? "active btn-urls" : "btn-urls"
              }
            >
              Hide selected URLs
            </div>
            <div
              className={
                selectedLinksArray.length > 0
                  ? "active btn-favourites"
                  : "btn-favourites"
              }
              onClick={onSubmitSwitch}
            >
              add to favourites
            </div>
            <div
              className={
                isCheck ? "active btn-selected-url" : "btn-selected-url"
              }
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
        </div>
        <div className="right">
          <div className="input-shorten">
            <Input
              placeholder="Paste long url and shorten it"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              loading={isPending}
              onClick={handleClickAdd}
              className="btn-shorten"
            >
              {isPending ? "" : "Shorten"}
            </Button>
          </div>
          {linkList?.data?.map((item: ListLinkhType, key: number) => {
            return (
              <div key={key}>
                <CardCuttlyShortLink itemLink={item} control={control} />
              </div>
            );
          })}
          <Pagination
            current={pagination?.page}
            pageSize={pagination?.limit}
            total={linkList?.total}
            onChange={handleTableChange}
          />
        </div>
      </div>
    </>
  );
}
