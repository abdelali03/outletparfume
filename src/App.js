import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import Contact from "./pages/contact/contact.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { getDoc } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";
import { fetchShopData, SHOP_DATA } from "./pages/shop/082 shop.data";
import AdminDashboard from "./pages/admin/admin.component";
import PreislistePage from "./pages/preisliste/preisliste.component";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // Fetch shop data when the app first renders
    fetchShopData().then(() => {
      console.log("SHOP_DATA fetched from Firebase:", SHOP_DATA);
    });

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const snapShot = await getDoc(userRef);

        setCurrentUser({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data(),
          },
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    if (this.unSubscribeFromAuth) {
      this.unSubscribeFromAuth();
    }
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/preisliste" component={PreislistePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/contact" component={Contact} />
          {/* Only render the /admin route if the user is logged in and has the 'admin' role */}
          {currentUser && currentUser.currentUser.role === "admin" ? (
            <Route path="/admin" component={AdminDashboard} />
          ) : (
            <Redirect from="/admin" to="/" />
          )}
          <Route
            exact
            path="/signin"
            render={() => {
              return currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
