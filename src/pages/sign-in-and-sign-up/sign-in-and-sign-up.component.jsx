import React from "react";

import "./sign-in-and-sign-up.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />

    {/* Add an id for anchor scrolling */}
    <div id="signup-section">
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;
