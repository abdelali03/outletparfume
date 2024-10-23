import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
import { connect } from "react-redux";

import { directorySelectorSections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othersectionprops }) => (
      <MenuItem key={id} {...othersectionprops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: directorySelectorSections,
});

export default connect(mapStateToProps)(Directory);
