import React, { useState, useEffect } from "react";
import AvatarModal from "./AvatarModal";
import { toast } from "react-toastify";
import './avatar.css'
const AvatarSection = () => {
  const [avatar, setAvatar] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load avatar from sessionStorage
  useEffect(() => {
    const storedAvatar = sessionStorage.getItem("avatar");
    if (storedAvatar) setAvatar(storedAvatar);
  }, []);

  const handleSaveAvatar = (newAvatar) => {
    try {
      sessionStorage.setItem("avatar", newAvatar);
      setAvatar(newAvatar);
      toast.success("Avatar updated successfully!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to update avatar. Please try again.");
      console.error("Failed to update avatar. Please try again.", error)
    }
  };

  return (
    <div className="avatar-container">
      <img
        src={avatar || "https://via.placeholder.com/100"}
        alt="User Avatar"
        className="avatar-img"
      />
      <button
        className="avatar-btn camera-btn"
        onClick={() => setIsModalOpen(true)}
      >
        <i className="fas fa-camera"></i>
      </button>

      {isModalOpen && (
        <AvatarModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveAvatar}
        />
      )}
    </div>
  );
};

export default AvatarSection;
