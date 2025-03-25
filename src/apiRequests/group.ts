import http from "@/lib/http";
import { LinkResType } from "@/schemaValidations/link.schema";
import { AddGruopOrganizationBodyType, AddOrganizationBodyType } from "@/schemaValidations/organization";

const prefix = "/group";
const groupApiRequest = {
  getListGroup: (id: string) => http.get<any>(`${prefix}/org/${id}`),

  getIdGroup: (id: string) => http.get<any>(`${prefix}/${id}`),

  getListGroupJoined: () => http.get<any>(`${prefix}/joined`),

  getListGroupOwned: () => http.get<any>(`${prefix}/owned`),

  createGroup: (body: AddGruopOrganizationBodyType) =>
    http.post<LinkResType>(`${prefix}/`, body),

  AddUserGroup: ({
    body,
    id,
  }: {
    id: number | string;
    body: AddOrganizationBodyType;
  }) => http.patch(`${prefix}/add-users/${id}`, body),

  updateGroup: ({
    body,
    id,
  }: {
    id: number | string;
    body: AddGruopOrganizationBodyType;
  }) => http.patch(`${prefix}/${id}`, body),

  RemoveUserGroup: ({
    body,
    id,
  }: {
    id: number | string;
    body: { active?: boolean; shorten?: string };
  }) => http.patch(`${prefix}/remove-users/${id}`, body),

  deleteGroup: (id: string) => http.delete(`${prefix}/${id}`),
};

export default groupApiRequest;
