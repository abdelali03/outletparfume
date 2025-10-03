import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils.js";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      error: null,
      loading: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      this.setState({ loading: true, error: null });
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userRef = doc(db, "users", user.uid);
      const snapShot = await getDoc(userRef);

      if (snapShot.exists()) {
        const userData = snapShot.data();
        if (userData.role === "admin") {
          this.props.history.push("/admin");
        } else {
          this.props.history.push("/");
        }
      } else {
        this.setState({ error: "Benutzerprofil wurde nicht gefunden." });
      }
    } catch (error) {
      this.setState({ error: error.message || "Fehler beim Anmelden." });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, showPassword, error, loading } = this.state;

    return (
      <div className="sign-in">
        <div className="card">
          <h2 className="title">Willkommen zurück</h2>
          <span className="subtitle">Melde dich mit E-Mail & Passwort an</span>

          {error && (
            <div className="alert" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={this.handleSubmit} className="form">
            <FormInput
              name="email"
              type="email"
              value={email}
              required
              label="E-Mail"
              handleChange={this.handleChange}
            />

            <div className="password-row">
              <FormInput
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                required
                label="Passwort"
                handleChange={this.handleChange}
              />
              <button
                type="button"
                className="pw-toggle"
                aria-label={
                  showPassword ? "Passwort verbergen" : "Passwort anzeigen"
                }
                onClick={() => this.setState({ showPassword: !showPassword })}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="buttons">
              <CustomButton
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Anmelden…" : "Anmelden"}
              </CustomButton>

              <CustomButton
                type="button"
                className="btn btn-google"
                isGoogleSignIn
                onClick={signInWithGoogle}
                disabled={loading}
              >
                Mit Google anmelden
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
