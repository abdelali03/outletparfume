import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

// collections can be null/undefined on first render
export const shopSelectorCollections = createSelector(
  [shopSelector],
  (shop) => shop?.collections ?? null
);

// keep your export name; return [] while loading so callers are safe
export const selectCollectionSForPreview = createSelector(
  [shopSelectorCollections],
  (collections) =>
    collections ? Object.keys(collections).map((k) => collections[k]) : []
);

// keep your API; add guards + light normalization so URLs like "parfums-de-marly" work
export const selectCollection = (collectionUrlParam) =>
  createSelector([shopSelectorCollections], (collections) => {
    if (!collections || !collectionUrlParam) return null;

    const raw = String(collectionUrlParam);
    const compact = raw.toLowerCase().replace(/[^a-z0-9]+/g, ""); // parfumsdemarly
    const hyphen = raw
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""); // parfums-de-marly

    return (
      collections[raw] ?? collections[compact] ?? collections[hyphen] ?? null
    );
  });
