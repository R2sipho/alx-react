import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html, markAsRead, id }) => {
  // Render the appropriate list item based on the props
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    );
  }

  if (type && value) {
    return (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }

  return (
    <li
      data-notification-type="default"
      onClick={() => markAsRead(id)}
    >
      NotificationItem: invalid props
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;

