import { useNavigate } from "react-router-dom";
import "./GlobalNavigation.css";

const GlobalNavigation = ({ backPath, nextPath }) => {
  const navigate = useNavigate();

  return (
    <div className="global-navigation">
      {backPath && (
        <button
          className="nav-btn back-btn"
          onClick={() => navigate(backPath)}
        >
          ← Back
        </button>
      )}
      {nextPath && (
        <button
          className="nav-btn next-btn"
          onClick={() => navigate(nextPath)}
        >
          Next →
        </button>
      )}
    </div>
  );
};

export default GlobalNavigation;
