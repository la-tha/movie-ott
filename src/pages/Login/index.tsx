/** @format */

import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import "./index.css";
import playIcon from "../../assets/images/playIcon.png";
import { useId, useState } from "react";
/** @format */

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const formField = [
    {
      id: "1",
      type: "email",
      value: state.email,
      placeholder: "Email",
      name: "email",
    },
    {
      id: "2",
      type: "password",
      value: state.password,
      placeholder: "Password",
      name: "password",
    },
  ];
  const handleChange = (e: any) =>
    setState({ ...state, [e.target.name]: e.target.value });
  return (
    <div className="authBackground relative login px-8 py-8">
      <div className="text-center	">
        <h1> Movie OTT</h1>
        <div className="formField">
          <div className="signIn formCard">
            <h2 style={{ color: "#FFFF" }}>
              Sign <span style={{ color: "#BB261A" }}>In</span>
            </h2>
            <div>
              <form>
                {formField.map((list, idx) => (
                  <div className="inputMargin" key={idx}>
                    <InputGroup
                      {...list}
                      onChange={(e: any) => handleChange(e)}
                    />
                  </div>
                ))}
              </form>
            </div>
            <div className="btnMargin">
              <Button
                type={"button"}
                label="Sign In"
                onClick={() => {}}
                dark={"primary"}
              />
            </div>
          </div>
          <div className="signUp formCard">
            <h2 style={{ color: "#62D5BA" }}>
              Welcome to <span style={{ color: "#BB261A" }}>Movie OTT</span>
            </h2>
            <div className="playIconImg">
              <img src={playIcon} alt="playIcon" />
            </div>
            <p className="infoTag" style={{ color: "#62D5BA" }}>
              New here?
              <span style={{ color: "#BB261A" }}> Create an account here.</span>
            </p>
            <div className="mt-8">
              <Button type={"button"} label="Sign Up" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
