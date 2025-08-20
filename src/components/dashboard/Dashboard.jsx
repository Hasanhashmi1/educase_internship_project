import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import AvatarModal from "../avatar section/AvatarModal";
import { toast } from "react-toastify";
import "./Dashboard.css";

const Dashboard = () => {
    const [avatar, setAvatar] = useState("");
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const storedAvatar = sessionStorage.getItem("avatar");
        if (storedAvatar) setAvatar(storedAvatar);

        const storedData = sessionStorage.getItem("signupData");
        if (storedData) {
            setUser(JSON.parse(storedData));
        }
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSaveAvatar = (newAvatar) => {
        try {
            sessionStorage.setItem("avatar", newAvatar);
            setAvatar(newAvatar);
            toast.success("Avatar updated successfully!");
            closeModal();
        } catch (error) {
            toast.error("Failed to update avatar. Please try again.");
            console.error("Failed to update avatar:", error);
        }
    };

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Account Settings</h2>

            <div className="dashboard-card">
                <div className="avatar-section">
                    <img
                        src={avatar || "https://via.placeholder.com/100"}
                        alt="avatar"
                        className="dashboard-avatar"
                    />
                    <button className="camera-btn" onClick={openModal}>
                        <FaCamera />
                    </button>
                </div>

                <div className="dashboard-info">
                    <h3 className="dashboard-name">{user?.fullName || "Guest User"}</h3>
                    <p className="dashboard-email">{user?.email || "guest@example.com"}</p>
                    <p className="dashboard-bio">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam.
                    </p>
                </div>
            </div>

            {isModalOpen && (
                <AvatarModal onClose={closeModal} onSave={handleSaveAvatar} />
            )}
        </div>
    );
};

export default Dashboard;
