import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', value, html }) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  }
  if (value) {
    return <li data-notification-type={type}>{value}</li>;
  }
  return <li data-notification-type="default">NotificationItem: invalid props</li>;
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;

