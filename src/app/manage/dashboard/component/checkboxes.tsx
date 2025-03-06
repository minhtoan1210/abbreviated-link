"use client";
import { Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CardCuttlyShortLink from "@/components/card-cuttly-short-link";
import { useRef, useState } from "react";
import { useCreateLinkMutation } from "@/queries/useLink";
import { useLogoutMutation } from "@/queries/useAuth";
import { useRouter } from "next/navigation";

export default function Checkboxes() {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<any>(null);
  const router = useRouter()
  //   const { mutate, error, isPending } = useCreateLinkMutation();

  const { mutate, error, isPending } = useLogoutMutation();

  const handleClick = () => {
    //     setLoading(true);
    //    const body = {
    //         original: inputRef.current?.input.value as string,
    //       }
    const result = mutate();
    console.log("result", result);

    router.push('/login')

    setTimeout(() => setLoading(false), 3000); // Fake API call
  };

  return (
    <>
      <div className="box">
        <div className="left">
          <div className="title">
            To do any of the following, first select short links using the
            checkboxes.
          </div>
          <div className="btn-create-link">Create Link-in-Bio</div>
          <div className="btn-urls">Hide selected URLs</div>
          <div className="btn-favourites">add to favourites</div>
          <div className="btn-selected-url">bulk selected URLs</div>
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
              onClick={handleClick}
              className="btn-shorten"
            >
              {isPending ? "" : "Shorten"}
            </Button>
          </div>
          <CardCuttlyShortLink />
        </div>
      </div>
    </>
  );
}
