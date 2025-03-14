import teamApiRequest from "@/apiRequests/team";
import { useMutation } from "@tanstack/react-query";

export const useCreateTeamMutation = () => {
  return useMutation({
    mutationFn: teamApiRequest.createTeam,
  });
};



