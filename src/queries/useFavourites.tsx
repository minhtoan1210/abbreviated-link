import favouritesApiRequest from "@/apiRequests/favourites";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetListFavourites = () => {
  return useQuery({
    queryKey: ["get-list-favourites"],
    queryFn: async () => {
      const res = await favouritesApiRequest.getListFavourites();
      return res.data || [];
    },
  });
};

export const useUpdateFavouritesMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: favouritesApiRequest.updateFavourites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });
};

export const useRemoveFavouritesMutation = () => {
  const queryClient = useQueryClient();
    return useMutation({
      mutationFn: favouritesApiRequest.removeFavourites,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get-list-favourites"] });
      },
    });
  };
  
