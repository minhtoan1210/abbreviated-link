import http from "@/lib/http";
import { CreateOrganizationBodyType } from "@/schemaValidations/organization";
import { CreateBodyType, getListResType } from "@/schemaValidations/team.schema";

const prefix = "/organization";
const organizationApiRequest = {
  createOrganization: (body: CreateOrganizationBodyType) =>
    http.post(`${prefix}`, body),

  updateOrganization: ({ body, id }: { id: string; body: any }) =>
    http.patch<any>(`${prefix}/${id}`, body),

  deleteOrganization: (id: string) =>
    http.delete<CreateBodyType>(`${prefix}/${id}`),

  getListOrganization: (param: any) =>
    http.get<{ data: getListResType[] }>(`${prefix}/my-organizations`, { params: param }),

  getIdOrganization: (id: string) =>
    http.get<CreateBodyType>(`${prefix}/${id}`),
};

export default organizationApiRequest;
