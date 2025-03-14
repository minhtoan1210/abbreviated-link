"use client";
import { useGetListOrganization } from "@/queries/useOrganization";
import { Table } from "antd";
import dayjs from "dayjs";
import { DDMMYY } from "@/constants/type";
import React from "react";

export default function ComponentTable() {
  const { data: getListOrganization, refetch } = useGetListOrganization();

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
      render: (_:any, record: any) => <a>Delete</a>,
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
