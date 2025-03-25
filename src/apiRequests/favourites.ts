import http from "@/lib/http";
import { updateFavouritesType } from "@/schemaValidations/favourites.schema";

const prefix = "/favourites";

const favouritesApiRequest = {
  getListFavourites: () => http.get<any>(`${prefix}/get-list-favourites`),

  updateFavourites: (body: updateFavouritesType) =>
    http.patch<any>(`${prefix}/add-favourites`, body),

  removeFavourites: (body: updateFavouritesType) =>
    http.patch<any>(`${prefix}/remove-favourites`, body),
};

export default favouritesApiRequest;
