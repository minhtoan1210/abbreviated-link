'use client'
import React from "react";
import "./style.css";
import CardCuttlyShortLink from "../../dashboard/component/card-cuttly-short-link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateFavouritesSchema } from "@/schemaValidations/favourites.schema";
import { ListLinkhType } from "../../dashboard/component/checkboxes";
import { useGetListFavourites, useRemoveFavouritesMutation } from "@/queries/useFavourites";
import { toast } from "react-toastify";

export default function page() {
   const { data: linkListFavourites } = useGetListFavourites();
   const removeFavouritesMutation = useRemoveFavouritesMutation()
  const { control, watch } = useForm<any>({
    resolver: zodResolver(updateFavouritesSchema),
    defaultValues: {
      favourites: {},
    },
  });

  const selectedLinksArray = Object.entries(watch("favourites") || {})
  .filter(([_, value]) => value)
  .map(([key]) => key);

   const handleClickRemove = async () => {
     try {
       await removeFavouritesMutation.mutateAsync({
        favourites: selectedLinksArray,
       });
 
       toast.success("Xóa khỏi danh sách thành công");
     } catch (error: any) {
       toast.error(`Lỗi: ${error.toString()}`);
     }
   };

  return (
    <div className="favourites">
      <div className="title">Favourites URLs</div>
      <div className="box">
        <div className="left">
          <div className="content">
            <p>
              To do any of the following, first select short links using the
              checkboxes.
            </p>
            <div className={ selectedLinksArray.length > 0 ? "active btn-remove" : "btn-remove"}
              onClick={handleClickRemove}
              >remove from favourites</div>
            <div className=" active btn-start-url">Start - URL Shortener</div>
          </div>
        </div>
        <div className="right">
          <div className="box">
            {linkListFavourites?.data?.map((item: ListLinkhType, key: number) => {
              return (
                <div key={key}>
                  <CardCuttlyShortLink itemLink={item} control={control} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
