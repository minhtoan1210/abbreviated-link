import http from "@/lib/http";
import { CreateBodyType } from "@/schemaValidations/team.schema";

const teamApiRequest = {
  createTeam: (body: CreateBodyType) =>
    http.post<CreateBodyType>("/group", body),
};

export default teamApiRequest;
