"u";
import {
  useAddUserOrganizationMutation,
  useDeleteUserOrganizationMutation,
  useGetIdOrganization,
  useGetListUserOrganization,
} from "@/queries/useOrganization";
import {
  AddOrganizationBody,
  AddOrganizationBodyType,
} from "@/schemaValidations/organization";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import { CirclePlus, Trash2 } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function OrganizationUsers() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addUserOrganizationMutation = useAddUserOrganizationMutation();
  const deleteUserOrganizationMutation = useDeleteUserOrganizationMutation();
  const { data: getListUserOrganization } = useGetListUserOrganization(
    id as string
  );

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<AddOrganizationBodyType>({
    resolver: zodResolver(AddOrganizationBody),
    defaultValues: {
      users: [],
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
    },
  ];

  return (
    <>
      <div className="organization-users_detail">
        <div className="title">
          <span>Danh sách người nhân viên trong Tổ Chức</span>
        </div>
        <Table
          dataSource={getListUserOrganization?.data}
          columns={columns}
          rowKey="_id"
        />
      </div>
    </>
  );
}
