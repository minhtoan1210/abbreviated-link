import z from "zod";

export const updateHiddenUrlsSchema = z.object({
    hidden_urls: z.array(z.string()),
});


export type updateHiddenUrlsType = z.TypeOf<typeof updateHiddenUrlsSchema>;
