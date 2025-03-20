"u";
import { getLocalStorage } from "@/lib/utils";
import {
  useGetListUserOrganization,
} from "@/queries/useOrganization";
import {
  AddOrganizationBody,
  AddOrganizationBodyType,
} from "@/schemaValidations/organization";
import { zodResolver } from "@hookform/resolvers/zod";
import { Table } from "antd";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function OrganizationUsers() {
  const { id } = useParams();
  const { data: getListUserOrganization } = useGetListUserOrganization(
    getLocalStorage("roles") === "admin" ? id : getLocalStorage("organization")
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
