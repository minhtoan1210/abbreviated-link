import http from "@/lib/http";
import { updateHiddenUrlsType } from "@/schemaValidations/hiddenUrls.schema";

const prefix = "/hidden_urls";
const hiddenUrlsApiRequest = {
  getListHiddenUrls: () => http.get<any>(`${prefix}/get-list-hidden-urls`),

  addHiddenLink: (body: updateHiddenUrlsType) =>
    http.patch<any>(`${prefix}/add-hidden-link`, body),

  removeHiddenLink: (body: updateHiddenUrlsType) =>
    http.patch<any>(`${prefix}/remove-hidden-link`, body),
};
export default hiddenUrlsApiRequest;
