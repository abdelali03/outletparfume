import React, { useState, useEffect } from "react";
import "./collection.style.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import SearchBar from "../../components/searchbar/searchbar.component";

const CollectionPage = ({ collection }) => {
  const [searchField, setSearchField] = useState("");
  const [filteredItems, setFilteredItems] = useState(
    collection ? collection.items : []
  );

  useEffect(() => {
    if (collection) {
      setFilteredItems(
        collection.items.filter((item) =>
          item.name.toLowerCase().includes(searchField.toLowerCase())
        )
      );
    }
  }, [searchField, collection]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  if (!collection) {
    return <div>Collection not found</div>; // Or some loading state
  }

  const { title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <SearchBar handleChange={handleChange} />
      <div className="items">
        {filteredItems.map((item) => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
