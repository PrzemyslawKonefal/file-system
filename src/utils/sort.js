import { SORT_DIRECTIONS } from "../constants/table";

export const sortAlpha = (list, fieldNameToSortBy, direction) =>
  list.sort((a, b) => {
    const result = a[fieldNameToSortBy].localeCompare(b[fieldNameToSortBy]);
    return direction === SORT_DIRECTIONS.asc ? result : !result;
  });

export const sortAlpha = (list, fieldNameToSortBy, direction) =>
  list.sort((a, b) => {
    const result = a[fieldNameToSortBy].localeCompare(b[fieldNameToSortBy]);
    return direction === SORT_DIRECTIONS.asc ? result : !result;
  });
