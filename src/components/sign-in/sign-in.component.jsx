import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import for Firebase v9
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils.js";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", user);
      const userRef = doc(db, "users", user.uid);
      const snapShot = await getDoc(userRef);

      if (snapShot.exists()) {
        const userData = snapShot.data();
        console.log("User data:", userData);
        if (userData.role === "admin") {
          this.props.history.push("/admin"); // Redirect admin to admin dashboard
        } else {
          this.props.history.push("/"); // Redirect regular users to homepage
        }
      } else {
        console.error("User snapshot does not exist");
      }
    } catch (error) {
      console.error("Error signing in", error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            label="email"
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            label="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
