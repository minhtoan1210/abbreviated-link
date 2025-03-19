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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: organizationApiRequest.updateOrganization,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-list-organization"] });
    },
  });
};

export const useDeleteOrganizationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: organizationApiRequest.deleteOrganization,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-list-organization"] });
    },
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

export const useGetListUserOrganization = (id:string) => {
  return useQuery({
    queryKey: ["get-list-user-organization"],
    queryFn: async () => {
      const res = await organizationApiRequest.getListUserOrganization(id);
      return res?.data || [];
    },
  });
};

export const useGetIdOrganization = (id?: string) => {
  return useQuery({
    queryKey: ["get-id-organization", id],
    queryFn: async () => {
      if (!id) return null;
      const res = await organizationApiRequest.getIdOrganization(id);
      return res?.data || [];
    },
    enabled: !!id,
  });
};


export const useAddUserOrganizationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: organizationApiRequest.addUserOrganization,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-list-user-organization"] });
    },
  });
};

export const useDeleteUserOrganizationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: organizationApiRequest.deleteUserOrganization,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["get-list-user-organization"] });
      queryClient.invalidateQueries({ queryKey: ["links-Group", variables.id] });
    },
  });
};

