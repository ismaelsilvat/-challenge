import { strings } from "@/const/strings";

export const formatFilms = (films: string[] | undefined): string => {
  if (!films || films.length === 0) {
    return strings.none;
  }

  const slicedFilms = films.slice(0, 3);
  const formattedFilms = slicedFilms.join(", ");

  return films.length > 3 ? `${formattedFilms}...` : formattedFilms;
};