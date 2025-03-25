"use client";
import {
  AddGruopOrganizationBody,
  AddGruopOrganizationBodyType,
} from "@/schemaValidations/organization";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetIdGroup,
  useGetListGroup,
} from "@/queries/useGroup.tsx";
import { useParams } from "next/navigation";
import { Table } from "antd";
import { getLocalStorage } from "@/lib/utils";

export default function OrganizationGroups() {
  const [isCheck, setIscheck] = useState({
    type: "",
    id: "",
  });
  const { id } = useParams();
  const { data: getListGroup } = useGetListGroup(getLocalStorage('roles') === 'admin' ? id : getLocalStorage('organization'));
  const { data: getIdGroup } = useGetIdGroup(isCheck?.id);

  const formGroup = useForm<AddGruopOrganizationBodyType>({
    resolver: zodResolver(AddGruopOrganizationBody),
    defaultValues: {
      name: "",
      organization: "",
      owner: undefined,
      users: [],
    },
  });

  const columns_groups = [
    {
      title: "Tên Nhóm",
      dataIndex: "name",
    },
    {
      title: "Chủ sở hữu",
      dataIndex: "owner",
      render: (_: any, record: any) => {
        return <div>{record?.owner?.fullname}</div>;
      },
    },
    {
      title: "Nhân viên trong nhóm",
      dataIndex: "users",
      render: (_: any, record: any) => {
        return record?.users.map((item: any, key: number) => (
          <div key={key}>{item?.email}</div>
        ));
      },
    },
  ];

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

  return (
    <>
      <div className="organization-users_groups">
        <div className="title">
          Danh sách Nhóm trong Tổ Chức
        </div>
        <Table
          dataSource={getListGroup?.data}
          columns={columns_groups}
          rowKey="_id"
        />
      </div>
    </>
  );
}
