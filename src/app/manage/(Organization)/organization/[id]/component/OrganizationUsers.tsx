"u";
import {
  useAddUserOrganizationMutation,
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
    const { data: getListUserOrganization } = useGetListUserOrganization(id as string)

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
    reset()
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
              //   await deleteOrganizationMutation.mutateAsync(record._id);
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
    console.log("hehe", value);
    try {
      await addUserOrganizationMutation.mutateAsync({
        body: value,
        id: id as string,
      });
      reset()
      setIsModalOpen(false);
      toast.success("Thêm thành công");
    } catch (error: any) {
      toast.error(`Lỗi: ${error.toString()}`);
    }
  };

  return (
    <>
      <div className="organization-users_detail">
        Danh sách người nhân viên trong Tổ Chức
        <Button type="primary" onClick={showModal}>
          <CirclePlus className="w-[20px]" /> Create new
        </Button>
        <Modal
          title="Thêm Nhân viên vào Tổ Chức"
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
                  <Input.TextArea
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
