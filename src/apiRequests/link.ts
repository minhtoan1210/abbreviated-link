import http from "@/lib/http";
import {
  LinkResType,
} from "@/schemaValidations/link.schema";

const linkApiRequest = {
  listLink: (param: { page: string | number; limit: string | number }) =>
    http.get<any>("link/my-links", { params: param }),
  createLink: (body: { original: string }) =>
    http.post<LinkResType>("/link/", body),
  deleteLink: (id: string) => http.delete(`/link/${id}`),
  updateLink: ({ body, id }: { id: number | string; body: { active?: boolean , shorten?: string, addtag?: string } }) =>
    http.patch(`/link/${id}`, body),
};

export default linkApiRequest; 

