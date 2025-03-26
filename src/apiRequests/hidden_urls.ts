import http from "@/lib/http";

const prefix = "/hidden_urls";
const hiddenUrlsApiRequest = {
  getListHiddenUrls: () => http.get<any>(`${prefix}/get-list-hidden-urls`),
};
export default hiddenUrlsApiRequest;
