import React from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        <span role="img" aria-label="search">
          🔍
        </span>
      </Link>
      <CartIcon />

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      {currentUser && currentUser.currentUser.role === "admin" ? (
        <Link className="option" to="/admin">
          Admin
        </Link>
      ) : (
        ""
      )}
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
