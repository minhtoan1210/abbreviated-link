import hiddenUrlsApiRequest from "@/apiRequests/hidden_urls";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useHiddenUrlsList = () => {
  return useQuery({
    queryKey: ["hidden-urls-links"],
    queryFn: async () => {
      const res = await hiddenUrlsApiRequest.getListHiddenUrls();
      return res?.data || [];
    },
  });
};

export const useUpdateHiddenUrlsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: hiddenUrlsApiRequest.addHiddenLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });
};

export const useRemoveHiddenUrlsMutation = () => {
  const queryClient = useQueryClient();
    return useMutation({
      mutationFn: hiddenUrlsApiRequest.removeHiddenLink,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["hidden-urls-links"] });
      },
    });
  };
