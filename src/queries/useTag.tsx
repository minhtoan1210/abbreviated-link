import tagApiRequest from "@/apiRequests/tag";
import { useQuery } from "@tanstack/react-query";

export const useTagList = () => {
  return useQuery({
    queryKey: ["tag-links"],
    queryFn: async () => {
      const res = await tagApiRequest.getListTag();
      return res?.data || [];
    },
  });
};
