import AuthForm from "components/AuthForm";
import { authService } from "fbInstance";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// OAuth
const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };
  return (
    <div className="authContainer">
      <AuthForm />
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
