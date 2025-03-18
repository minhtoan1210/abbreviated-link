"use client";
import { useParams } from "next/navigation";
import React, { useRef, useState } from "react";
import {
  useAddUserOrganizationMutation,
  useGetIdOrganization,
} from "@/queries/useOrganization";
import Link from "next/link";
import dayjs from "dayjs";
import { DDMMYY } from "@/constants/type";
import { Button, Modal, Popconfirm, Table } from "antd";
import { CirclePlus, Edit, Trash2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Form, Input } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddOrganizationBody,
  AddOrganizationBodyType,
} from "@/schemaValidations/organization";
import { toast } from "react-toastify";
import { useAddUserGroupMutation } from "@/queries/useGroup.tsx";
import OrganizationGroups from "./component/OrganizationGroups";
import OrganizationUsers from "./component/OrganizationUsers";

export default function DetailOrganization() {
  const { id } = useParams();
 const { data: getIdOrganization } = useGetIdOrganization(id as string);

  return (
    <>
      <div className="organization">
        <div className="organization-name">
          Tên tổ chức: {getIdOrganization?.data.name}
        </div>
        <div className="organization-email">
          Email tổ chức: {getIdOrganization?.data.email}
        </div>
        <div className="organization-address">
          Địa chỉ Tổ Chức: {getIdOrganization?.data.address.appartment}{" "}
          {getIdOrganization?.data.address.street},{" "}
          {getIdOrganization?.data.address.district},{" "}
          {getIdOrganization?.data.address.city},{" "}
          {getIdOrganization?.data.address.country}
        </div>
        <div className="organization-phone">
          Số Điện Thoại: {getIdOrganization?.data.phone_number}
        </div>
        <OrganizationUsers />
        <OrganizationGroups />
      </div>
    </>
  );
}
