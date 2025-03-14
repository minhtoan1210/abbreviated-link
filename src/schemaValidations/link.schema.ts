import { z } from "zod";

export const CreateLinkBody = z.object({
    original: z.string()
  })

export const LinkhRes = z.object({
  data: CreateLinkBody,
  message: z.string(),
});


  

export type LinkResType = z.TypeOf<typeof LinkhRes>;

export type CreateLinkBodyType = z.TypeOf<typeof LinkhRes>;
