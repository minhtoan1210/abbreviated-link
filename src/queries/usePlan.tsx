import http from "@/lib/http";

const prefix = "/plan";

const planApiRequest = {
  getListPlan: () => http.get<any>(`${prefix}`),
  getListIdPlan: (id: string) => http.get<any>(`${prefix}/${id}`),

  createplan: (body: any) =>
    http.post<any>(`${prefix}`, body),

  updateplan: ({body, id}: {body: any, id: any}) =>
    http.patch<any>(`${prefix}/${id}`, body),

  deleteplan: (id: string) => http.delete(`${prefix}/${id}`),
};

export default planApiRequest;
