import hiddenUrlsApiRequest from "@/apiRequests/hidden_urls";
import { useQuery } from "@tanstack/react-query";

export const useHiddenUrlsList = () => {
  return useQuery({
    queryKey: ["hidden-urls-links"],
    queryFn: async () => {
      const res = await hiddenUrlsApiRequest.getListHiddenUrls();
      return res?.data || [];
    },
  });
};
