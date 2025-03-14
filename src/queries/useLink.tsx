import linkApiRequest from "@/apiRequests/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

export const useLinkList = (param: {
  page: string | number;
  limit: string | number;
}) => {
  return useQuery({
    queryKey: ["links", param.page, param.limit],
    queryFn: async () => {
      const res = await linkApiRequest.listLink(param);
      return res?.data || [];
    },
  });
};

export const useCreateLinkMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: linkApiRequest.createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });
};

export const useDeleteLinkMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: linkApiRequest.deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });
};

export const useUpdateLinkMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: linkApiRequest.updateLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });
};
