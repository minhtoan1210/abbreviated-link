"use client";
import { Button, Input } from "antd";
import React, { useRef } from "react";
import "./style.css";
import { useUpdateLinkMutation } from "@/queries/useLink";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function ChangeUrlName() {
  const inputChangeUr = useRef<any>(null);
  const updateLinkMutation = useUpdateLinkMutation();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter()

  const handleChangUrl = () => {
    try {
      updateLinkMutation.mutate({
        id: id as string,
        body: {
          shorten: inputChangeUr.current.input.value,
        },
      });
      router.push('/manage/dashboard')
       toast.success("Thêm thành công");
    } catch (error: any) { 
      toast.error(`Lỗi: ${error.toString()}`);
    }
  };

  return (
    <div className="ChangeUrlName">
      <div className="title">Set your own custom url alias / name</div>
      <div className="sub-title">
        Type it below. Allowed characters: a-z A-Z 0-9 - _ !
      </div>
      <Input placeholder="Type new link alias" ref={inputChangeUr} />
      <Button type="primary" onClick={handleChangUrl}>
        Change
      </Button>
    </div>
  );
}
