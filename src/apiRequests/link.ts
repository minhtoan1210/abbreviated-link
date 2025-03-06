import http from "@/lib/http";
import { CreateLinkBodyType, LinkResType } from "@/schemaValidations/link.schema";

const linkApiRequest = {
  listLink: () => http.get<any>("link/my-links"),
  createLink: (body: { original: string }) => http.post<LinkResType>("/link/", body),
};

export default linkApiRequest;
