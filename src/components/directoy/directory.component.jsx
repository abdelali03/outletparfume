import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
import { connect } from "react-redux";
import { directorySelectorSections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const Directory = ({ sections, history }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const routeNames = [
    "xerjoff",
    "byredo",
    "exnihilo",
    "versace",
    "calvinklein",
    "nishane",
    "dsquared2",
    "mfk",
    "azzaro",
    "tizianaterenzi",
    "212vipcarolinaherrera",
    "tomford",
    "maisonmargiela",
    "bvlgari",
    "jimmychoo",
    "chanel",
    "giorgioarmani",
    "jeroboamgozo",
    "dior",
    "dolcegabbana",
    "clivechristian",
    "yvessaintlaurent",
    "valentino",
    "simimi",
    "creed",
    "prada",
    "robertocavalli",
    "chloe",
    "gisada",
    "philippplein",
    "givenchy",
    "narciso",
    "cartier",
    "hermes",
    "kajal",
    "memoparis",
    "nasomatto",
    "initio",
    "ortoparisi",
    "victoriassecret",
    "parfumsdemarly",
    "bottegaveneta",
    "mugler",
    "mancera",
    "morph",
    "marcantoinebarrois",
    "acquadiparma",
    "duccigiardiniditoscana",
    "burberry",
    "carolinaherrera",
    "montale",
    "lancome",
    "sospiro",
    "jeanpaulgaultier",
    "kilianparis",
    "hugoboss",
    "guerlain",
    "gucci",
    "viktorrolf",
    "pacorabanne",
    "kosmetics",
    "andereprodukte",
    "parfumesets",
    // hier nochmal Hermes aus dem zweiten Eintrag
    "hermes",
    "louisvuitton",
    "amouage",
    "armaf",
    "birberr",
    "by-killian",
    "emporio-armani",
    "elie-saab",
    "frederic-malle",
    "giardini-di-toscana",
    "hfc-devils",
    "kayali",
    "lacoste",
    "maison-crivelli",
    "maison-francis-kurkdjian",
    "mancers",
    "marc-antone",
    "matiere-premiere",
    "memo-marfa",
    "molecule",
    "moschino",
    "salvatore-ferragamo",
    "terre-de-hermes",
    "zarko-perfume",
    "marc-jacob",
    "jo-malone",
    "celine",
    "philosykos",
    "mirabilis",
    "trussardi",
    "billie-eilish",
    "giardino",
    "issey-miyake",
    "club-de-nuit",
    "zadi-voltaire",
    "kenzo",
    "lartisanparfumwur",
    "dkny",
    "lattafa",
    "dearpolly",
  ];

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = routeNames.filter((routeName) =>
        routeName.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      const matchedRoute = routeNames.find(
        (routeName) => routeName.toLowerCase() === searchTerm.toLowerCase()
      );
      if (matchedRoute) {
        history.push(`shop/${matchedRoute}`);
      } else {
        alert("No matching brand found!");
      }
    }
  };

  return (
    <div className="directory-menu">
      <div className="directory-header">
        <h2 className="header-title">Dies sind die meistverkauften Parfums</h2>
        <div className="search-bar-container">
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Suche nach Marke..."
              value={searchTerm}
              onChange={handleInputChange}
              className="search-input"
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-item"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Full-width MenuItem wrapper */}
      <div className="full-width-wrapper">
        <MenuItem
          title="Kosmetics"
          imageUrl1=" https://res.cloudinary.com/dlxpttd8b/image/upload/v1744128386/cosmetics-beauty-makeup-products-logo-design-vector_tlialh.jpg "
          imageUrl=" https://res.cloudinary.com/dlxpttd8b/image/upload/v1744129015/a76bef97692411.5ecb80c0b5828_dnoq8g.jpg "
          size="large"
          linkUrl="shop/kosmetics"
          className="full-width"
        />

        <MenuItem
          title="parfumesets"
          imageUrl1=" https://res.cloudinary.com/dlxpttd8b/image/upload/v1745620330/WhatsApp_Image_2025-04-26_%C3%A0_00.31.32_637ae916_vzhwre.jpg"
          imageUrl=" https://res.cloudinary.com/dlxpttd8b/image/upload/v1745620133/bdb156f027f1c83b8884d8b46c1f1361_lt5ifx.jpg "
          size=" large "
          linkUrl="shop/parfumesets"
          className="full-width"
        />
      </div>
      <div className="menu-items">
        {sections.map(({ id, ...othersectionprops }) => (
          <MenuItem key={id} {...othersectionprops} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: directorySelectorSections,
});

export default connect(mapStateToProps)(withRouter(Directory));
