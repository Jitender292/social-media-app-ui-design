import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">lunasocial</h3>
          <span className="loginDesc">
            Lunasocial helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgotten Password?</span>
            <button className="loginRegisterButton">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
