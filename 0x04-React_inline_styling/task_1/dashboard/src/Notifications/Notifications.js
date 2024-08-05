import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import propTypes from 'prop-types';

class Notifications extends Component {
  // Bound class method for logging notification id
  markAsRead = (id) => {
    console.log(`Notification ${id} has been read`);
  };

  // Only update if the next listNotifications is longer than the current one
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { listNotifications, displayDrawer } = this.props;

    return (
      <>
        <div className="menuItem">
          <p className={css(notificationStyles.p)}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(notificationStyles.notifications)}>
            <button
              style={{
                position: 'absolute',
                background: 'transparent',
                border: 'none',
                right: '20px',
              }}
              aria-label="close"
              onClick={() => {
                console.log('Close button has been clicked');
              }}
            >
              <img src={close_icon} alt="close" height="15px" width="15px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <li>
                  <p>No notification available yet</p>
                </li>
              ) : (
                listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => this.markAsRead(notification.id)}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const primaryColor = '#E11D3F';

const notificationStyles = StyleSheet.create({
  notifications: {
    border: `1px solid ${primaryColor}`,
    padding: '1rem',
    position: 'relative',
  },
  p: {
    margin: 0,
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape),
};

export default Notifications;

