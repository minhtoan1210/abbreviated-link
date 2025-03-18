import http from "@/lib/http";
import {
  AddOrganizationBodyType,
  CreateOrganizationBodyType,
  DeleteOrganizationBodyType,
  getListOrganizationResType,
} from "@/schemaValidations/organization";
import {
  CreateBodyType,
  getListResType,
} from "@/schemaValidations/team.schema";

const prefix = "/organization";
const organizationApiRequest = {
  createOrganization: (body: CreateOrganizationBodyType) =>
    http.post(`${prefix}`, body),

  updateOrganization: ({
    body,
    id,
  }: {
    id: string;
    body: CreateOrganizationBodyType;
  }) => http.patch<any>(`${prefix}/${id}`, body),

  deleteOrganization: (id: string) =>
    http.delete<CreateBodyType>(`${prefix}/${id}`),

  getListOrganization: (param: any) =>
    http.get<{ data: getListOrganizationResType[] }>(
      `${prefix}/my-organizations`,
      {
        params: param,
      }
    ),

  getListUserOrganization: (id: string) =>
    http.get<{ data: getListOrganizationResType[] }>(`${prefix}/users/${id}`),

  getIdOrganization: (id: string) =>
    http.get<{ data: getListOrganizationResType }>(`${prefix}/${id}`),

  addUserOrganization: ({
    body,
    id,
  }: {
    body: AddOrganizationBodyType;
    id: string;
  }) => http.patch(`${prefix}/add-user/${id}`, body),

  deleteUserOrganization: ({
    body,
    id,
  }: {
    body: DeleteOrganizationBodyType;
    id: string;
  }) => http.patch(`${prefix}/remove-user/${id}`, body),
};

export default organizationApiRequest;
