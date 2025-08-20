import React, { useState } from "react";
import { toast } from "react-toastify";
import "./avatar.css";

const AvatarModal = ({ onClose, onSave }) => {
  const [link, setLink] = useState("");

  const handleSubmit = () => {
    if (!link) {
      toast.error("Please enter a valid image URL.");
      return;
    }
    onSave(link); // directly save link
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Change Avatar</h2>
        <input
          type="text"
          placeholder="Enter image URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        {link && (
          <div className="preview-container">
            <img src={link} alt="Preview" className="preview-img" />
          </div>
        )}

        <div className="modal-actions">
          <button className="modal-btn save" onClick={handleSubmit}>
            Submit
          </button>
          <button className="modal-btn cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;
