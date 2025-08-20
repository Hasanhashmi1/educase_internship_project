import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("signupData", JSON.stringify(formData));

    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create your PopX account</h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="signup-field">
            <label className="signup-label">Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>

          {/* Phone */}
          <div className="signup-field">
            <label className="signup-label">Phone number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>

          {/* Email */}
          <div className="signup-field">
            <label className="signup-label">Email address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>

          {/* Password */}
          <div className="signup-field">
            <label className="signup-label">Password*</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>

          {/* Company */}
          <div className="signup-field">
            <label className="signup-label">Company name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="signup-input"
            />
          </div>

          {/* Agency */}
          <div className="signup-field">
            <label className="signup-label">Are you an Agency?*</label>
            <div className="signup-radio-group">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="signup-submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
