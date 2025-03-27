"use client";
import React from "react";
import CardCuttlyShortLink from "../../dashboard/component/card-cuttly-short-link";
import "./style.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateHiddenUrlsSchema } from "@/schemaValidations/hiddenUrls.schema";
import { useHiddenUrlsList, useRemoveHiddenUrlsMutation } from "@/queries/useHiddenUrls";
import { ListLinkhType } from "../../dashboard/component/checkboxes";
import { toast } from "react-toastify";

export default function page() {
  const { data: hiddenUrlsList } = useHiddenUrlsList();
  const removeFavouritesMutation = useRemoveHiddenUrlsMutation()
  const { control, watch } = useForm<any>({
    resolver: zodResolver(updateHiddenUrlsSchema),
    defaultValues: {
      hidden_urls: {},
    },
  });

  const selectedLinksArray = Object.entries(watch("hidden_urls") || {})
    .filter(([_, value]) => value)
    .map(([key]) => key);

  console.log("selectedLinksArray", selectedLinksArray);

     const handleClickRemove = async () => {
       try {
         await removeFavouritesMutation.mutateAsync({
          hidden_urls: selectedLinksArray,
         });
   
         toast.success("Xóa khỏi danh sách thành công");
       } catch (error: any) {
         toast.error(`Lỗi: ${error.toString()}`);
       }
     };

  return (
    <div className="hidden-urls">
      <div className="title">Hidden URLs</div>
      <div className="box">
        <div className="left">
          <div className="content">
            <p>
              To do any of the following, first select short links using the
              checkboxes.
            </p>
            <div
              className={
                selectedLinksArray.length > 0
                  ? "active btn-remove"
                  : "btn-remove"
              }
              onClick={handleClickRemove}
            >
              Unhide selected URLs
            </div>
            <div className="btn-start-url">Start - URL Shortener</div>
          </div>
        </div>
        <div className="right">
          <div className="box">
            {hiddenUrlsList?.map((item: ListLinkhType, key: number) => (
              <div key={key}>
                <CardCuttlyShortLink itemLink={item} control={control} name={"hidden_urls"}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
