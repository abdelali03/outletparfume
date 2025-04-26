import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import "./collection-overview.style.scss";
import { createStructuredSelector } from "reselect";
import { selectCollectionSForPreview } from "../../redux/shop/shop.selectors";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionOverview = ({ collections }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null); // Create a reference for the search input

  useEffect(() => {
    // Automatically focus on the search bar when the component mounts
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Flatten products from all collections
  const allProducts = collections.flatMap((collection) => collection.items);

  // Filter products based on the search query
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="collection-overview">
      {/* Search Bar */}
      <input
        ref={searchInputRef} // Attach the reference to the input
        type="text"
        placeholder="Search for a product..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CollectionItem key={product.id} item={product} />
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionSForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
