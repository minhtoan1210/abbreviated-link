"use client";
import React from "react";
import CardCuttlyShortLink from "../../dashboard/component/card-cuttly-short-link";
import "./style.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateHiddenUrlsSchema } from "@/schemaValidations/hiddenUrls.schema";
import { useHiddenUrlsList } from "@/queries/useHiddenUrls";
import { ListLinkhType } from "../../dashboard/component/checkboxes";

export default function page() {
  const { data: hiddenUrlsList } = useHiddenUrlsList();
  const { control, watch } = useForm<any>({
    resolver: zodResolver(updateHiddenUrlsSchema),
    defaultValues: {
      hiddenUrls: {},
    },
  });

  const selectedLinksArray = Object.entries(watch("favourites") || {})
    .filter(([_, value]) => value)
    .map(([key]) => key);

  console.log("hiddenUrlsList", hiddenUrlsList);

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
                <CardCuttlyShortLink itemLink={item} control={control} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
