import authApiRequest from "@/apiRequests/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import jwt, { JwtPayload } from "jsonwebtoken";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.login,
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.logout,
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.register,
  });
};

export const useProfile = () => {
  if (typeof window === "undefined") {
    return { data: null, isLoading: true };
  }

  const token = localStorage.getItem("accessToken");
  const decodedAccessToken = token ? (jwt.decode(token) as any) : null;

  return useQuery({
    queryKey: ["links"],
    queryFn: async () => {
      const res = await authApiRequest.getProfile(
        decodedAccessToken?.user?._id
      );
      return res.data || [];
    },
  });
};

export const useUpdateProfileMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.updateProfile,
  });
};
