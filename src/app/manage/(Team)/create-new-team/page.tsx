"use client";
import { useCreateTeamMutation } from "@/queries/useTeam";
import { CreateBody, CreateBodyType } from "@/schemaValidations/team.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import "./style.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Button, Checkbox, Form, Input } from "antd";

export default function page() {
  const createTeamMutation = useCreateTeamMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBodyType>({
    resolver: zodResolver(CreateBody),
    defaultValues: {
      name: "",
      organization: "",
      owner: "",
    },
    mode: "onChange",
  });

  const router = useRouter();

  const onSubmit = async (values: CreateBodyType) => {
    try {
      await createTeamMutation.mutateAsync(values);
      router.push("/manage/your-teams");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="create-new-team">
      <div className="title">Tạo Nhóm</div>
      <Form
        labelCol={{ span: 4 }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item
          label={
            <>
              <span style={{ color: "red" }}>*</span> Tên Nhóm{" "}
            </>
          }
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label={
            <>
              <span style={{ color: "red" }}>*</span> Tên Tổ chức{" "}
            </>
          }
          name="organization"
          validateStatus={errors.organization ? "error" : ""}
          help={errors.organization?.message}
        >
          <Controller
            name="organization"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label={
            <>
              <span style={{ color: "red" }}>*</span> Người sở hữu{" "}
            </>
          }
          name="owner"
          validateStatus={errors.owner ? "error" : ""}
          help={errors.owner?.message}
        >
          <Controller
            name="owner"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleSubmit(onSubmit)}>
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
