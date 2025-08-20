import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

//   const avatarUrl = "https://i.pravatar.cc/100";

  return (
    <div className="welcome-container">
      <div className="welcome-card">

        <div className="welcome-image-wrapper">
          {/* <img
            src={avatarUrl}
            alt="Welcome Avatar"
            className="welcome-image"
          /> */}
        </div>

        <div className="welcome-text-wrapper">
          <h1 className="welcome-title">Welcome to PopX</h1>
          <p className="welcome-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="welcome-button-wrapper">
          <button
            onClick={() => navigate("/signup")}
            className="welcome-btn create-btn"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="welcome-btn login-btn"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
