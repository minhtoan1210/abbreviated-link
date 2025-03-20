"use client";
import { useParams } from "next/navigation";
import React from "react";
import {
  useGetIdOrganization,
} from "@/queries/useOrganization";
import OrganizationGroups from "./component/OrganizationGroups";
import OrganizationUsers from "./component/OrganizationUsers";
import './component/style.css'
import { getLocalStorage } from "@/lib/utils";

export default function DetailOrganization() {
  const { id } = useParams();
 const { data: getIdOrganization } = useGetIdOrganization(getLocalStorage('roles') === 'admin' ? id : getLocalStorage('organization'));

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
