"use client";
import { useProfile, useUpdateProfileMutation } from "@/queries/useAuth";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input } from "antd";
import { ProfileBody, ProfileBodyType } from "@/schemaValidations/auth.schema";

export default function ProfileForm() {
  const [data, setData] = useState<string | null>(null);
  const [idProfile, setIdProfile] = useState<any>(null);
  const { data: getprofile } = useProfile();
  const updateProfileMutation = useUpdateProfileMutation();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ProfileBodyType>({
    resolver: zodResolver(ProfileBody),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirm_password: "",
      phone_number: "",
    },
  });

  useEffect(() => {
    if (getprofile) {
      reset(getprofile.data);
    }
  }, [getprofile]);

  const onSubmit = async (value: any) => {
    try {
      await updateProfileMutation.mutateAsync({
        body: value,
        id: getprofile.data._id
      });
    } catch (error) {}
  };

  return (
    <div className="profile-form">
      <Form onFinish={handleSubmit(onSubmit)} labelCol={{ span: 7 }}>
        <Form.Item
          label="Fullname"
          labelAlign="left"
          validateStatus={errors.fullname ? "error" : ""}
          help={errors.fullname?.message}
        >
          <Controller
            name="fullname"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          labelAlign="left"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="phone_number"
          labelAlign="left"
          validateStatus={errors.phone_number ? "error" : ""}
          help={errors.phone_number?.message}
        >
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="password"
          labelAlign="left"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="confirm password"
          labelAlign="left"
          validateStatus={errors.confirm_password ? "error" : ""}
          help={errors.confirm_password?.message}
        >
          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item className="text-right">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
