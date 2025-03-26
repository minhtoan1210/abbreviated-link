import z from "zod";

export const updateHiddenUrlsSchema = z.object({
    hiddenUrls: z.array(z.string()),
});


export type updateHiddenUrlsType = z.TypeOf<typeof updateHiddenUrlsSchema>;
