"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { CirclePlus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateOrganizationBody,
  CreateOrganizationBodyType,
} from "@/schemaValidations/organization";
import {
  useCreateOrganizationMutation,
  useGetIdOrganization,
  useUpdateOrganizationMutation,
} from "@/queries/useOrganization";
import OrganizationFormFields from "./organizationForm";
import { toast } from "react-toastify";

interface CreateFormProps {
  data: { type: string; id: string } | null;
  setId: React.Dispatch<
    React.SetStateAction<{ type: string; id: string } | null>
  >;
}

const defaultValues: CreateOrganizationBodyType = {
  email: "",
  name: "",
  phone_number: "",
  address: {
    appartment: "",
    city: "",
    country: "",
    district: "",
    street: "",
  },
};

export default function OrganizationForm({ data, setId }: CreateFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: getIdOrganization } = useGetIdOrganization(data?.id);
  const createOrganizationMutation = useCreateOrganizationMutation();
  const updateOrganizationMutation = useUpdateOrganizationMutation();

  const formMethods = useForm<CreateOrganizationBodyType>({
    resolver: zodResolver(CreateOrganizationBody),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (getIdOrganization && data?.type === "update") {
      setIsModalOpen(true);
      formMethods.reset(getIdOrganization.data);
    }
  }, [getIdOrganization]);

  const showModal = () => {
    if (data?.type !== "update") {
      console.log("data", data);
      formMethods.reset(defaultValues);
      setIsModalOpen(true);
    }
  };

  const handleCancel = () => {
    setId(null);
    formMethods.reset(defaultValues);
    setIsModalOpen(false);
  };

  const onSubmit = async (values: CreateOrganizationBodyType) => {
    try {
      if (data?.type === "update") {
        await updateOrganizationMutation.mutateAsync({
          body: values,
          id: data.id,
        });
      } else {
        await createOrganizationMutation.mutateAsync(values);
      }
      formMethods.reset();
      setId(null);
      setIsModalOpen(false);
    } catch (error: any) {
       toast.error(`Lỗi: ${error.toString()}`);
    }

  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <CirclePlus className="w-[20px]" /> Create new
      </Button>

      <Modal
        title={
          data?.type ? data.type + " " + "Organization" : "Create Organization"
        }
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <OrganizationFormFields
          formMethods={formMethods}
          onSubmit={onSubmit}
          handleCancel={handleCancel}
        />
      </Modal>
    </>
  );
}
