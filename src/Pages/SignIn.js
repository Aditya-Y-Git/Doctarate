import { Link } from "react-router-dom";
import "../CSS/SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../Firebase/FirebaseConfig"
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errroMsg, setErrorMsg] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/home");
      })
      .catch((err) => {
        submitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>D</span>octorate
          </h2>
        </div>
      </nav>

      <div className="content">
        <h3>Log In</h3>
        <div className="forms">
          <form action="#">
            <div className="inputs">
              <label htmlFor="email">Email</label>
            </div>
            <div className="inputs">
              <input
                type="email"
                name="Email"
                id="email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>
            <div className="inputs">
              <label htmlFor="pass">Password</label>
            </div>
            <div className="inputs">
              <input
                type="password"
                name="Password"
                id="pass"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                required
              />
            </div>
          </form>
        </div>
        <div className="error">
          <p>{errroMsg}</p>
        </div>
        <div className="button">
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Log In
          </button>
        </div>
        <div className="footer">
          <p>
            Don't have account ? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
