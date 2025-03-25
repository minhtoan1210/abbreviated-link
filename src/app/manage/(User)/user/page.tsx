"use client";
import {
  useAddUserOrganizationMutation,
  useDeleteUserOrganizationMutation,
  useGetListUserOrganization,
} from "@/queries/useOrganization";
import {
  AddOrganizationBody,
  AddOrganizationBodyType,
} from "@/schemaValidations/organization";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import { CirclePlus, Edit, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./style.css";
import { getLocalStorage } from "@/lib/utils";

export default function page() {
  const id = getLocalStorage("organization");
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
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex space-x-3">
          <Popconfirm
            title="Bạn có chắc muốn xóa?"
            onConfirm={async () => {
              await deleteUserOrganizationMutation.mutateAsync({
                body: {
                  user: record._id,
                },
                id: id as string,
              });
            }}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button
              type="text"
              icon={<Trash2 size={18} className="text-red-500" />}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onSubmit = async (value: AddOrganizationBodyType) => {
    try {
      await addUserOrganizationMutation.mutateAsync({
        body: value,
        id: id as string,
      });
      reset();
      setIsModalOpen(false);
      toast.success("Thêm thành công");
    } catch (error: any) {
      toast.error(`Lỗi: ${error.toString()}`);
    }
  };

  return (
    <>
      <div className="organization-users_detail">
        <div className="title">
          <span>Danh sách người nhân viên trong Tổ Chức</span>
          <Button type="primary" onClick={showModal}>
            <CirclePlus className="w-[20px]" /> Create new
          </Button>
        </div>
        <Modal
          title={"Thêm Nhân viên"}
          open={isModalOpen}
          onOk={handleSubmit(onSubmit)}
          onCancel={handleCancel}
        >
          <Form labelCol={{ span: 7 }}>
            <Form.Item
              label="Email"
              validateStatus={errors.users ? "error" : ""}
              help={errors.users?.message}
            >
              <Controller
                name="users"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value.split(",").map((email) => email.trim())
                      )
                    }
                    placeholder="Nhập email, phân cách bằng dấu phẩy"
                  />
                )}
              />
            </Form.Item>
          </Form>
        </Modal>
        <Table
          dataSource={getListUserOrganization?.data}
          columns={columns}
          rowKey="_id"
        />
      </div>
    </>
  );
}
