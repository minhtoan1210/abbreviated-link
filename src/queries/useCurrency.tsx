import currencyApiRequest from "@/apiRequests/currency";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateCurrencyMutation = () => {
  return useMutation({
    mutationFn: currencyApiRequest.createCurrency,
  });
};

export const useGetListCurrency = (id: string) => {
  return useQuery({
    queryKey: ["get-list-currency", id],
    queryFn: async () => {
      const res = await currencyApiRequest.getListCurrency();
      return res.data || [];
    },
  });
};

export const useUpdateCurrencyMutation = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: currencyApiRequest.updateCurrency,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get-list-currency"] });
      },
  });
};

export const useDeleteGroupMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: currencyApiRequest.deleteCurrency,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get-list-currency"] });
      },
    });
  };
