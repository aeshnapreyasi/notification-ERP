import React from 'react';

const Header = () => {
  return (
    <div className="notifications-header">
      <div className="d-flex justify-content-between align-items-start mb-3 w-100">
        <div>
          <h2 className="h4 mb-1">Notifications</h2>
          <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>
            Stay updated with your latest activities
          </p>
        </div>
        <div>
        <button className="mark-read-button">
          Mark all as read
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
            className="profile-pic ms-3"
          />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
