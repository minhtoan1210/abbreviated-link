import http from "@/lib/http";

const prefix = "/tag";
const tagApiRequest = {
  getListTag: () => http.get<any>(`${prefix}/get-list-tag`),
};
export default tagApiRequest;
