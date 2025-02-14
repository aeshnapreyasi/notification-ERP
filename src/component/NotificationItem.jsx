import React from 'react';

const NotificationItem = ({ icon, color, title, time }) => {
  return (
    <div className="notification-item d-flex align-items-start p-3 mb-2">
      <div className={`notification-icon ${color} me-3`}>
        <i className={`bi ${icon}`}></i>
      </div>
      <div className="flex-grow-1">
        <div className="notification-title">{title}</div>
        <div className="notification-time">{time}</div>
      </div>
      <button className="action-button">
        <i className="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  );
};

export default NotificationItem;
