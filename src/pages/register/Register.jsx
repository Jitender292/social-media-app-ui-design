import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">lunasocial</h3>
          <span className="registerDesc">
            Lunasocial helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
            />
            <input type="email" placeholder="Email" className="registerInput" />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="registerInput"
            />
            <button className="registerButton">Sign up</button>
            <button className="registerLoginButton">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
