import React, { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';

const NotificationItem = ({ type, value, html, markAsRead, id }) => {
  // Default to an empty object if html is not provided
  const htmlContent = html || {};

  return (
    <li
      onClick={() => { markAsRead(id); }}
      data-notification-type={type}
      dangerouslySetInnerHTML={htmlContent}
      className={css(type === 'urgent' ? itemStyles.urgent : itemStyles.default)}
    >
      {value}
    </li>
  );
};

const itemStyles = StyleSheet.create({
  urgent: {
    color: 'red',
  },
  default: {
    color: 'blue',
  },
});

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({
    __html: propTypes.string,
  }),
  markAsRead: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
};

export default memo(NotificationItem);

