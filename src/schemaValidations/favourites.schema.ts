import z from "zod";

export const updateFavouritesSchema = z.object({
    favourites: z.array(z.string()),
    type: z.string().optional(),
});


export type updateFavouritesType = z.TypeOf<typeof updateFavouritesSchema>;
