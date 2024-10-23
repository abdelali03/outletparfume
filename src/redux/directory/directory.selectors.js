import { createSelector } from "reselect";

const directorySelector = (state) => state.directory;

export const directorySelectorSections = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
