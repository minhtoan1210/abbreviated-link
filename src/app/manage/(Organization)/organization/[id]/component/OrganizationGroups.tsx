"use client";
import {
  AddGruopOrganizationBody,
  AddGruopOrganizationBodyType,
  AddOrganizationBody,
  AddOrganizationBodyType,
} from "@/schemaValidations/organization";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal, Popconfirm, Select, Table } from "antd";
import { CirclePlus, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import {
  useAddUserGroupMutation,
  useCreateGroupMutation,
  useGetIdGroup,
  useGetListGroup,
  useUpdateGroupMutation,
} from "@/queries/useGroup.tsx";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { useGetListUserOrganization } from "@/queries/useOrganization";

export default function OrganizationGroups() {
  const [isModalGroupOpen, setIsModalGroupOpen] = useState(false);
  const [isCheck, setIscheck] = useState({
    type: "",
    id: "",
  });
  const { id } = useParams();
  const { data: getListGroup } = useGetListGroup(id as string);
  const addUserGroupMutation = useAddUserGroupMutation();
  const createGroupMutation = useCreateGroupMutation();
  const updateGroupMutation = useUpdateGroupMutation();
  const { data: getIdGroup } = useGetIdGroup(isCheck?.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: getListUserOrganization } = useGetListUserOrganization(
    id as string
  );
  const selectedGroupRef = useRef<any>(null);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<AddOrganizationBodyType>({
    resolver: zodResolver(AddOrganizationBody),
    defaultValues: {
      users: [],
    },
  });

  const formGroup = useForm<AddGruopOrganizationBodyType>({
    resolver: zodResolver(AddGruopOrganizationBody),
    defaultValues: {
      name: "",
      organization: "",
      owner: undefined,
      users: [],
    },
  });

  const showGroupModal = (record: any) => {
    selectedGroupRef.current = record;
    setIsModalGroupOpen(true);
  };

  const handleGroupCancel = () => {
    reset();
    setIsModalGroupOpen(false);
  };

  const onSubmitGroup = async (value: AddOrganizationBodyType) => {
    try {
      await addUserGroupMutation.mutateAsync({
        body: value,
        id: selectedGroupRef?.current?._id as string,
      });
      reset();
      setIsModalGroupOpen(false);
      toast.success("Thêm thành công");
    } catch (error: any) {
      toast.error(`Lỗi: ${error.toString()}`);
    }
  };

  const columns_groups = [
    {
      title: "Tên Nhóm",
      dataIndex: "name",
    },
    {
      title: "Chủ sở hữu",
      dataIndex: "owner",
      render: (_: any, record: any) => {
        return <div>{record.owner.fullname}</div>;
      },
    },
    {
      title: "Nhân viên trong nhóm",
      dataIndex: "owner",
      render: (_: any, record: any) => {
        return record?.users.map((item: any, key: number) => (
          <div key={key}>{item?.email}</div>
        ));
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex space-x-3">
          <Button
            type="text"
            icon={<CirclePlus size={18} className="text-blue-500" />}
            onClick={() => showGroupModal(record)}
          />
          <Button
            type="text"
            icon={<Pencil size={18} className="text-blue-500" />}
            onClick={() => showModal(record)}
          />
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

  const showModal = (record?: any) => {
    if (record?._id) {
      setIscheck({
        type: "update",
        id: record._id,
      });
    }
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (getIdGroup && isCheck?.type === "update") {
      console.log("getIdGroup", getIdGroup);
      formGroup.reset({
        name: getIdGroup?.data.name,
        owner: getIdGroup?.data.owner,
        users: getIdGroup?.data.users.map((user: any) => user._id),
      });
    }
  }, [getIdGroup]);

  const handleCancel = () => {
    formGroup.reset({
      name: "",
      owner: "",
      users: [],
    });
    setIscheck({
      type: "",
      id: "",
    });
    setIsModalOpen(false);
  };

  const onSubmitCreateGroup = async (value: {
    name: string;
    owner: string;
    users: string[];
  }) => {
    try {
      if (isCheck.type == "update") {
        await updateGroupMutation.mutateAsync({
          body: {
            name: value.name,
            owner: value.owner,
            users: value.users,
            organization: id as string,
          },
          id: isCheck.id,
        });
      } else {
        await createGroupMutation.mutateAsync({
          name: value.name,
          owner: value.owner,
          users: value.users,
          organization: id as string,
        });
      }
      formGroup.reset({
        name: "",
        owner: "",
        users: [],
      });
      setIsModalOpen(false);
      toast.success("Thêm thành công");
    } catch (error: any) {
      toast.error(`Lỗi: ${error.toString()}`);
    }
  };

  return (
    <>
      <div className="organization-users_groups">
        Danh sách Nhóm trong Tổ Chức
        <Button type="primary" onClick={showModal}>
          <CirclePlus className="w-[20px]" /> Create new
        </Button>
        <Modal
          title={
            isCheck.type === "update"
              ? "Chỉnh sử nhóm trong tổ chức"
              : "Tạo Nhóm trong tổ chức"
          }
          open={isModalOpen}
          onOk={() => {
            // console.log("Form errors:", formGroup.formState.errors);
            formGroup.handleSubmit(onSubmitCreateGroup)();
          }}
          onCancel={handleCancel}
        >
          <Form labelCol={{ span: 7 }}>
            <Form.Item
              label="Thành Viên"
              validateStatus={formGroup.formState.errors.users ? "error" : ""}
              help={formGroup.formState.errors.users?.message}
            >
              <Controller
                name="users"
                control={formGroup.control}
                render={({ field }) => (
                  <Select
                    {...field}
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Chọn người dùng"
                    optionFilterProp="children"
                    onChange={(value) => field.onChange(value)}
                  >
                    {getListUserOrganization?.data?.map((user: any) => (
                      <Select.Option key={user._id} value={user._id}>
                        {user.fullname}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
            </Form.Item>

            <Form.Item
              label="Tên Nhóm"
              validateStatus={formGroup.formState.errors.name ? "error" : ""}
              help={formGroup.formState.errors.name?.message}
            >
              <Controller
                name="name"
                control={formGroup.control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>

            <Form.Item
              label="owner"
              validateStatus={formGroup.formState.errors.owner ? "error" : ""}
              help={formGroup.formState.errors.owner?.message}
            >
              <Controller
                name="owner"
                control={formGroup.control}
                render={({ field }) => (
                  <Select
                    {...field}
                    style={{ width: "100%" }}
                    placeholder="Chọn người dùng"
                    optionFilterProp="children"
                    onChange={(value) => field.onChange(value)}
                  >
                    {getListUserOrganization?.data?.map((user: any) => (
                      <Select.Option key={user._id} value={user._id}>
                        {user.fullname}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Thêm Nhân viên vào Tổ Chức"
          open={isModalGroupOpen}
          onOk={handleSubmit(onSubmitGroup)}
          onCancel={handleGroupCancel}
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
                  <Select
                    {...field}
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Chọn người dùng"
                    optionFilterProp="children"
                    onChange={(value) => field.onChange(value)}
                  >
                    {getListUserOrganization?.data?.map((user: any) => (
                      <Select.Option key={user._id} value={user._id}>
                        {user.fullname} - {user.email}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
            </Form.Item>
          </Form>
        </Modal>
        
        <Table
          dataSource={getListGroup?.data}
          columns={columns_groups}
          rowKey="_id"
        />
      </div>
    </>
  );
}
