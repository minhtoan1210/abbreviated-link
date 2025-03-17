"use client";
import { useDeleteOrganizationMutation, useGetListOrganization } from "@/queries/useOrganization";
import { Edit, Trash2 } from "lucide-react";
import { Button, Popconfirm, Table } from "antd";
import dayjs from "dayjs";
import { DDMMYY } from "@/constants/type";
import React from "react";

interface ComponentTableProps {
  setId: React.Dispatch<React.SetStateAction<{ type: string; id: string } | null>> 
}

export default function ComponentTable({ setId }: ComponentTableProps) {
  const { data: getListOrganization } = useGetListOrganization();
 const deleteOrganizationMutation = useDeleteOrganizationMutation();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (address: any) =>
        `${address.appartment} ${address.street}, ${address.district}, ${address.city}, ${address.country}`,
    },
    {
      title: "Ngày Tạo",
      dataIndex: "createdAt",
      render: (createdAt: any) => dayjs(createdAt).format(DDMMYY),
    },
    {
      title: "Phone",
      dataIndex: "phone_number",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex space-x-3">
          <Button
            type="text"
            icon={<Edit size={18} className="text-blue-500" />}
            onClick={() =>
              setId({ type: "update", id: record._id })
            } 
          />

          <Popconfirm
            title="Bạn có chắc muốn xóa?"
            onConfirm={ async () => {
              await deleteOrganizationMutation.mutateAsync(record._id);
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

  return (
    <Table
      dataSource={getListOrganization?.data}
      columns={columns}
      rowKey="_id"
    />
  );
}
