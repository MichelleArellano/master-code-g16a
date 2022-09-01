import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { loginUser } from "../calls/actions.js";

const Form = ({ setisUserLogged }) => {
  const [credentials, setcredentials] = useState({});
  const navigate = useNavigate();

  const userHardcoded = "usuarioG16";
  const passwordHardcoded = "passw0rd";

  const handleInputCredential = ({ target: { value, name } }) => {
    setcredentials({ ...credentials, [name]: value });
  };

  const validateLogin = () => {
    loginUser(credentials)().then((res) => {
      console.log("credentials", credentials);
      console.log(res);
      setisUserLogged(true);
      setcredentials({});
      navigate("/character", { replace: true });
    });
    // if (
    //   credentials.user === userHardcoded &&
    //   credentials.password === passwordHardcoded
    // ) {
    //   setisUserLogged(true);
    //   setcredentials({});
    //   navigate("/character", { replace: true });
    // }
  };

  return (
    <>
      <Header></Header>
      <main>
        <section className="d-flex justify-content-center">
          <div className="mt-sm-2 card">
            <form id="form">
              <div className="text-center mb-sm-3">
                <img
                  className="mt-4 mb-4"
                  src="../src/img/logo.png"
                  alt="logoLogin"
                  height="72"
                />
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
              </div>
              <div className="ms-sm-5 me-sm-5">
                <div className="col-sm-12">
                  <label className="form-label">User</label>
                  <div className="input-group has-validation">
                    <span
                      className="input-group-text mb-sm-3"
                      id="inputGroupPrepend"
                    >
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control mb-sm-3"
                      id="user"
                      required
                      value={credentials.user}
                      name="user"
                      onChange={handleInputCredential}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <label className="form-label">Password</label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control mb-sm-3"
                      id="password"
                      required
                      value={credentials.password}
                      name="password"
                      onChange={handleInputCredential}
                    />
                  </div>
                </div>

                <div className="col-sm-12 mb-sm-3">
                  <div className="form-check">
                    <input
                      id="accountCheck"
                      className="form-check-input"
                      type="checkbox"
                      disabled
                      required
                    />
                    <label className="form-check-label">I'm not a robot.</label>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center mt-sm-3 mb-sm-3">
                  <button
                    id="btn-login"
                    className="btn btn-primary"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    type="submit"
                    onClick={validateLogin}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Form;
