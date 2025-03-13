import http from "@/lib/http";
import {
  CreateLinkBodyType,
  LinkResType,
} from "@/schemaValidations/link.schema";
import queryString from "query-string";

const linkApiRequest = {
  listLink: (param: { page: string | number; limit: string | number }) =>
    http.get<any>("link/my-links", { params: param }),
  createLink: (body: { original: string }) =>
    http.post<LinkResType>("/link/", body),
  deleteLink: (id: string) => http.delete(`/link/${id}`),
  updateLink: ({ body, id }: { id: number | string; body: { active?: boolean , shorten?: string } }) =>
    http.patch(`/link/${id}`, body),
};

export default linkApiRequest; 
