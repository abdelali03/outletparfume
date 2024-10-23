import React from "react";
import { connect } from "react-redux";
import "./collection-overview.style.scss";
import { createStructuredSelector } from "reselect";
import { selectCollectionSForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionSForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
