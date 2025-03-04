import { z } from "zod";

export const CreateLinkBody = z.object({
    user: z.string(),
    original: z.string(),
    shorten: z.string(),
   
  })

export const LinkhRes = z.object({
  data: CreateLinkBody,
  message: z.string(),
});

// export const ListLinkhRes = z.object({
//     data: CreateLinkBody,
//     message: z.string(),
//   });
  

export type LinkResType = z.TypeOf<typeof LinkhRes>;
export type CreateLinkBodyType = z.TypeOf<typeof LinkhRes>;
