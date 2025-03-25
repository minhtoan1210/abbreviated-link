import z from "zod";

export const updateFavouritesSchema = z.object({
    favourites: z.array(z.string()),
});


export type updateFavouritesType = z.TypeOf<typeof updateFavouritesSchema>;
