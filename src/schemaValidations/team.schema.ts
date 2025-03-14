import z from "zod";

export const CreateBody = z.object({
    name: z.string().min(1, "Tên nhóm không được để trống"),
    organization: z.string().min(1, "Tên tổ chức không được để trống"),
    owner: z.string().min(1, "Người sở hữu không được để trống"),
});

export const getListRes = z.object({
    address: z.object({
        appartment: z.string(),
        city: z.string(),
        country: z.string(),
        district: z.string(),
        street: z.string(),
    }),
    email: z.string(),
    name: z.string(),
    owner: z.string(),
    updatedAt: z.string(),
    __v: z.number(),
    _id: z.string(),
});

export type getListResType = z.TypeOf<typeof getListRes>;

export type CreateBodyType = z.TypeOf<typeof CreateBody>;