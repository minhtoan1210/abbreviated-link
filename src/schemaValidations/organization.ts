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
  users_detail: z.array(
    z.object({
      _id: z.string(),
      email: z.string(),
      fullname: z.string(),
    })
  ),
  groups: z.array(
    z.object({
      _id: z.string(),
      name: z.string(),
      owner: z.object({
        _id: z.string(),
        email: z.string(),
        fullname: z.string(),
      }),
      users: z.array(z.any()),
      createdAt: z.string(),
    })
  ),
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

export const AddOrganizationBody = z.object({
  users: z.array(z.string()),
});

export const DeleteOrganizationBody = z.object({
  user: z.array(z.string()),
});


export const AddGruopOrganizationBody = z.object({
  name: z.string(),
  organization: z.string().optional(),
  users: z.array(z.string()),
  owner: z.string(),
});

export type getListOrganizationResType = z.TypeOf<
  typeof getListOrganizationRes
>;

export type CreateOrganizationBodyType = z.TypeOf<
  typeof CreateOrganizationBody
>;

export type AddOrganizationBodyType = z.TypeOf<typeof AddOrganizationBody>;
export type AddGruopOrganizationBodyType = z.TypeOf<typeof AddGruopOrganizationBody>;

export type DeleteOrganizationBodyType = z.TypeOf<
  typeof DeleteOrganizationBody
>;
