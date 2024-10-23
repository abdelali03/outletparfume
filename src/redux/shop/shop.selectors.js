import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const shopSelectorCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollectionSForPreview = createSelector(
  [shopSelectorCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [shopSelectorCollections],
    (collections) => collections[collectionUrlParam]
  );
