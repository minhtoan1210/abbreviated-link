import linkApiRequest from "@/apiRequests/link";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLinkList = () => {
  return useQuery({
    queryKey: ['links'],
    queryFn: linkApiRequest.listLink
  });
};

export const useCreateLinkMutation = () => {
  return useMutation({
    mutationFn: linkApiRequest.createLink,
  });
};



