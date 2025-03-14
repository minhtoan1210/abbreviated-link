"use client";
import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { CirclePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreateOrganizationBody, CreateOrganizationBodyType } from "@/schemaValidations/organization";
import { useCreateOrganizationMutation } from "@/queries/useOrganization";

export default function CreateForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createOrganizationMutation = useCreateOrganizationMutation()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateOrganizationBodyType>({
    resolver: zodResolver(CreateOrganizationBody),
    defaultValues: {
      email: "",
      name: "",
      phone:"",
      address: {
        appartment: "",
        city: "",
        country: "",
        district: "",
        street: "",
      },
    },
    mode: "onChange",
  });

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const onSubmit = async (values: CreateOrganizationBodyType) => {
    console.log("Submitted values:", values);
    try {
      await createOrganizationMutation.mutate(values)
    } catch (error : any) {
      console.log(error)
    }
    reset();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <CirclePlus className="w-[20px]" /> Create new
      </Button>

      <Modal title="Create Organization" open={isModalOpen} footer={null} onCancel={handleCancel}>
        <Form onFinish={handleSubmit(onSubmit)} labelCol={{ span: 7 }}>
          <Form.Item  labelAlign="left" label="Name Organization" validateStatus={errors.name ? "error" : ""} help={errors.name?.message}>
            <Controller name="name" control={control} render={({ field }) => <Input {...field} />} />
          </Form.Item>

          <Form.Item  labelAlign="left" label="Phone Organization" validateStatus={errors.phone ? "error" : ""} help={errors.phone?.message}>
            <Controller name="phone" control={control} render={({ field }) => <Input {...field} />} />
          </Form.Item>

          <Form.Item  labelAlign="left" label="Email Organization" validateStatus={errors.email ? "error" : ""} help={errors.email?.message}>
            <Controller name="email" control={control} render={({ field }) => <Input {...field} />} />
          </Form.Item>

          <Form.Item
            label="Street"
            validateStatus={errors.address?.street ? "error" : ""}
            help={errors.address?.street?.message}
            labelAlign="left"
          >
            <Controller
              name="address.street"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="Appartment"
            validateStatus={errors.address?.appartment ? "error" : ""}
            help={errors.address?.appartment?.message}
            labelAlign="left"
          >
            <Controller
              name="address.appartment"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="District"
            validateStatus={errors.address?.district ? "error" : ""}
            help={errors.address?.district?.message}
            labelAlign="left"
          >
            <Controller
              name="address.district"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="City"
            validateStatus={errors.address?.city ? "error" : ""}
            help={errors.address?.city?.message}
            labelAlign="left"
          >
            <Controller
              name="address.city"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="Country"
            validateStatus={errors.address?.country ? "error" : ""}
            help={errors.address?.country?.message}
            labelAlign="left"
          >
            <Controller
              name="address.country"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item className="text-right">
            <Button className="mr-[4px]" onClick={handleCancel}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
