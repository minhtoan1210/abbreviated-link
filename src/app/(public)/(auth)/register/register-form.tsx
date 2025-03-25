"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterRes,
  RegisterResResType,
} from "@/schemaValidations/auth.schema";
import { useRegisterMutation } from "@/queries/useAuth";

export default function RegisterForm() {
  const registerMutation = useRegisterMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterResResType>({
    resolver: zodResolver(RegisterRes),
    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      confirm_password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (value: {
    email: string;
    password: string;
    fullname: string;
    confirm_password: string;
  }) => {
    await registerMutation.mutateAsync(value);
    console.log("hehe", value);
  };

  return (
    <div className="form-register">
      <Form onFinish={handleSubmit(onSubmit)} labelCol={{ span: 5 }}>
        <Form.Item
          label="Email"
          labelAlign="left"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Nhập Email"/>}
          />
        </Form.Item>

        <Form.Item
          label="Fullname"
          labelAlign="left"
          validateStatus={errors.fullname ? "error" : ""}
          help={errors.fullname?.message}
        >
          <Controller
            name="fullname"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Nhập fullname" />}
          />
        </Form.Item>

        <Form.Item
          label="password"
          labelAlign="left"
          validateStatus={errors?.password ? "error" : ""}
          help={errors?.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Nhập password" />
            )}
          />
        </Form.Item>

        <Form.Item
          label="confirm_password"
          labelAlign="left"
          validateStatus={errors?.confirm_password ? "error" : ""}
          help={errors?.confirm_password?.message}
        >
          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Nhập lại password" />
            )}
          />
        </Form.Item>
        
        <Form.Item className="text-center btn-register">
          <Button type="primary" htmlType="submit" >
            Create an account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
