import React from 'react';
import Header from './Header';
import NotificationItem from './NotificationItem';
import TimeDivider from './TimeDivider';

const notification = [
  { section: "Today", items: [
      { icon: "bi-file-text", color: "icon-blue", title: "New invoice #INV-2025-004 has been generated", time: "2 hours ago" },
      { icon: "bi-person-plus", color: "icon-green", title: "Sarah Johnson joined the team", time: "5 hours ago" }
    ]
  },
  { section: "Yesterday", items: [
      { icon: "bi-file-bar-graph", color: "icon-yellow", title: "Monthly report for January 2025 is ready", time: "Yesterday at 4:30 PM" },
      { icon: "bi-chat-dots", color: "icon-purple", title: "Mike Peters commented on your task", time: "Yesterday at 2:15 PM" }
    ]
  },
  { section: "Previous", items: [
      { icon: "bi-exclamation-triangle", color: "icon-red", title: "System maintenance scheduled for next week", time: "2 days ago" },
      { icon: "bi-box", color: "icon-gray", title: "New product added to inventory: SKU-2025-789", time: "3 days ago" }
    ]
  }
];

const NotificationContainer = () => {
  return (
    <div className="notifications-container">
      <Header />
      {notification.map((group, index) => (
        <div key={index}>
          <TimeDivider label={group.section} />
          {group.items.map((item, idx) => (
            <NotificationItem key={idx} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
