import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    // Render different parts based on the props
    if (type && value && !html) {
      return (
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li>
      );
    }
    if (!type && html && html.__html) {
      return (
        <li data-notification-type="default" dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
      );
    }
    if (type && html && html.__html) {
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
      );
    }
    return (
      <li data-notification-type="default" onClick={() => markAsRead(id)}>
        NotificationItem: invalid props
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({
    __html: propTypes.string,
  }),
  markAsRead: propTypes.func,
  id: propTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;

