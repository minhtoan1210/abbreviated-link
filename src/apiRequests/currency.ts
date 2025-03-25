import http from "@/lib/http";

const prefix = "/currency";

const currencyApiRequest = {
  getListCurrency: () => http.get<any>(`${prefix}/seeding`),

  createCurrency: (body: any) =>
    http.post<any>(`${prefix}`, body),

  updateCurrency: ({body, id}: {body: any, id: any}) =>
    http.patch<any>(`${prefix}/${id}`, body),

  deleteCurrency: (id: string) => http.delete(`${prefix}/${id}`),
};

export default currencyApiRequest;
