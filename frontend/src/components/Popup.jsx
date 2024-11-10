/* eslint-disable no-unused-vars */
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

import PropTypes from 'prop-types';

const Popup = ({ children, isVisible, onClose }) => {
  // Rest of the component code

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 220, friction: 120 },
  });

  if (!isVisible) return null;

  return (
    <animated.div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ ...springProps }}
    >
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Popup content */}
      <animated.div
        className="relative max-w-lg p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-white rounded-full p-2"
        >
          &times;
        </button>
        {children}
      </animated.div>
    </animated.div>
  );
};

export default Popup;
