import z from "zod";

export const getListOrganizationRes = z.object({
    address: z.object({
        appartment: z.string(),
        city: z.string(),
        country: z.string(),
        district: z.string(),
        street: z.string(),
    }),
    email: z.string(),
    name: z.string(),
    phone_number: z.string(),
    updatedAt: z.string(),
    __v: z.number(),
    _id: z.string(),
});

export const CreateOrganizationBody = z.object({
  address: z.object({
    appartment: z.string(),
    city: z.string(),
    country: z.string(),
    district: z.string(),
    street: z.string(),
  }),
  phone_number: z.string(),
  email: z.string(),
  name: z.string(),
});

export type getListOrganizationResType = z.TypeOf<typeof getListOrganizationRes>;

export type CreateOrganizationBodyType = z.TypeOf<typeof CreateOrganizationBody>;