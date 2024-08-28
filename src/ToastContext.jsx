import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from './Toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [customToast, setCustomToast] = useState("");
  const [showCustomToastBtn, setShowCustomToastBtn] = useState(false);

const handleCustomToast = (e) => {
  setCustomToast(e.target.value);
  setShowCustomToastBtn(true)
}


  const addToast = useCallback((message, type = 'info', position = 'top-right', duration = 5000) => {
    const id = Math.random().toString(36);
    setToasts((prevToasts) => [...prevToasts, { id, message, type, position }]);
    setTimeout(() => removeToast(id), duration);
  }, []);

  const addCustomToast = useCallback((message = customToast, type = "custom", position = "bottom-right", duration = 5000) => {
    const id = Math.random().toString(36);
    setToasts((prevToasts) => [...prevToasts, { id, message, type, position }]);
    setTimeout(() => removeToast(id), duration);
  }, [customToast])

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <>
    <div style={{display: 'flex', justifyContent: "center",position: "relative", top: "60px"}}>
    <input 
    type="text" 
    placeholder='Add custom toast here...'
    value={customToast}
    onChange={handleCustomToast}
    />
    </div>
    <ToastContext.Provider value={{ addToast, addCustomToast, showCustomToastBtn, setCustomToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} removeToast={() => removeToast(toast.id)} />
      ))}
    </ToastContext.Provider>
    </>
  );
};
