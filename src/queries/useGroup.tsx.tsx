import groupApiRequest from "@/apiRequests/group";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetListGroup = (id: string) => {
  return useQuery({
    queryKey: ["links-Group", id],
    queryFn: async () => {
      const res = await groupApiRequest.getListGroup(id);
      return res?.data || [];
    },
  });
};

export const useGetIdGroup = (id: string) => {
  return useQuery({
    queryKey: ["links-Group", id],
    queryFn: async () => {
      if (!id) return null;
      const res = await groupApiRequest.getIdGroup(id);
      return res?.data || [];
    },
    enabled: !!id,
  });
};

export const useCreateGroupMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: groupApiRequest.createGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links-Group"] });
    },
  });
};

export const useAddUserGroupMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: groupApiRequest.AddUserGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links-Group"] });
    },
  });
};


export const useUpdateGroupMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: groupApiRequest.updateGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links-Group"] });
    },
  });
};

export const useDeteleGroupMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: groupApiRequest.deleteGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links-Group"] });
    },
  });
};

