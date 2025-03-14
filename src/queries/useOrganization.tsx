import organizationApiRequest from "@/apiRequests/organization";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateOrganizationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: organizationApiRequest.createOrganization,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-list-organization"] });
    },
  });
};

export const useUpdateOrganizationMutation = () => {
  return useMutation({
    mutationFn: organizationApiRequest.updateOrganization,
  });
};

export const useDeleteOrganizationMutation = () => {
  return useMutation({
    mutationFn: organizationApiRequest.deleteOrganization,
  });
};

export const useGetListOrganization = (param?: {
  page: string | number;
  limit: string | number;
}) => {
  return useQuery({
    queryKey: ["get-list-organization", param?.page, param?.limit],
    queryFn: async () => {
      const res = await organizationApiRequest.getListOrganization(param);
      return res?.data || [];
    },
  });
};

export const useGetIdOrganization = (id: string) => {
    return useQuery({
      queryKey: ["get-id-organization"],
      queryFn: async () => {
        const res = await organizationApiRequest.getIdOrganization(id);
        return res?.data || [];
      },
    });
  };
  