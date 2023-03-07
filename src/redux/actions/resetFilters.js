import { RESET_FILTERS } from "../actionTypes";

export const resetFilters = (data) => ({
  type: RESET_FILTERS,
  data,
});
