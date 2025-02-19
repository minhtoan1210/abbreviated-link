import z from "zod";

export const DemoSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().nullable(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
});

export const DemoListRes = z.object({
  data: z.array(DemoSchema),
  message: z.string(),
});

export type DemoListResType = z.TypeOf<typeof DemoListRes>;
