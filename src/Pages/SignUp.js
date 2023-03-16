import "../CSS/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {auth} from "../Firebase/FirebaseConfig"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp2 = () => {
  // functionality

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errroMsg, setErrorMsg] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        alert("Signed Up successfully");
        navigate("/signin");
      })
      .catch((err) => {
        submitButtonDisabled(false);
        setErrorMsg(err.message);
        console.log(err.message);
      });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>D</span>octorate
          </h2>
        </div>
      </nav>

      {/* form */}
      <div className="content">
        <h3>Sign Up</h3>
        <div className="forms">
          <form>
            <div className="inputs">
              <label htmlFor="Name">Name</label>
            </div>
            <div className="inputs">
              <input
                type="text"
                name="name"
                id="Name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                required
              />
            </div>
            <div className="inputs">
              <label htmlFor="email">Email</label>
            </div>
            <div className="inputs">
              <input
                type="email"
                name="email"
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
                name="password"
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

        {/* button */}
        <div className="button">
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Sign Up
          </button>
        </div>

        {/* footer */}
        <div className="footer">
          <p>
            Already have account ? <Link to="/signin">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
