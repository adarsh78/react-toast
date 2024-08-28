import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const toastTypes = {
  success: { background: '#4caf50', icon: '✔️' },
  error: { background: '#f66055', icon: '❌' },
  warning: { background: '#ffc266', icon: '⚠️' },
  info: { background: '#2196f3', icon: 'ℹ️' },
  custom: { background: '#214562', icon: 'C' },
};

const Toast = ({ id, message, type, position, removeToast }) => {
  const toast = toastTypes[type] || toastTypes.info;

  return ReactDOM.createPortal(
    <ToastContainer position={position} style={{ background: toast.background }}>
      <span>{toast.icon}</span>
      <div>{message}</div>
      <button onClick={removeToast}>✖️</button>
    </ToastContainer>,
    document.body
  );
};

const positions = {
    'top-right': `
      top: 1rem;
      right: 1rem;
      @media (max-width: 1000px) {
        top: unset;
        bottom: 1rem;
        left: unset;
        right: 5rem;
        transform: none;
      }
    `,
    'top-left': `
      top: 1rem;
      left: 1rem;
      @media (max-width: 1000px) {
        top: unset;
        bottom: 7rem;
        left: 6.6rem;
        right: unset;
        transform: none;
      }
    `,
    'bottom-right': `
      bottom: 1rem;
      right: 1rem;
      @media (max-width: 1000px) {
        top: unset;
        bottom: 9rem;
        left: unset;
        right: 8rem;
        transform: none;
      }
    `,
    'bottom-left': `
      bottom: 1rem;
      left: 1rem;
      @media (max-width: 1000px) {
        top: unset;
        bottom: 3rem;
        left: 6rem;
        right: unset;
        transform: none;
      }
    `,
    'bottom-center': `
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 1000px) {
        top: unset;
        bottom: 5rem;
        left: 50%;
        transform: translateX(-50%);
      }
    `,
  };

const ToastContainer = styled.div`
  position: fixed;
  z-index: 9999;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: #fff;
  ${({ position }) => positions[position] || positions['top-right']}

  & > span {
    margin-right: 0.5rem;
  }

  & > button {
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    margin-left: auto;
    cursor: pointer;
  }
`;

export default Toast;
