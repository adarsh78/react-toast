import React from 'react';
import { useToast } from './ToastContext';

const App = () => {
  const { addToast, addCustomToast, showCustomToastBtn } = useToast();

  return (
    <>
    <div style={{color: 'white', display: 'flex', justifyContent: 'center', marginBottom: "3rem"}}>React Toast Notification</div>
    <div style={{ paddingBlock: '20px', display: 'flex', justifyContent: 'center', gap: "5px"}}>
      <button 
      style={{padding: "5px", border: "none", outline: "none", background: "#99ffbb", borderRadius: "4px"}}
      onClick={() => addToast('Success message!', 'success', 'top-right', 5000)}>Success</button>
      <button 
       style={{padding: "5px", border: "none", outline: "none", background: "#ff6666", borderRadius: "4px"}}
      onClick={() => addToast('Error message!', 'error', 'bottom-left', 5000)}>Error</button>
      <button 
       style={{padding: "5px", border: "none", outline: "none", background: "#ffff99", borderRadius: "4px"}}
      onClick={() => addToast('Warning message!', 'warning', 'bottom-center', 5000)}>Warning</button>
      <button 
       style={{padding: "5px", border: "none", outline: "none", background: "#8080ff", borderRadius: "4px"}}
      onClick={() => addToast('Info message!', 'info', 'top-left', 5000)}>Info</button>
      {showCustomToastBtn &&  <button 
       style={{padding: "5px", border: "none", outline: "none", background: "#b380ff", borderRadius: "4px"}}
      onClick={() => addCustomToast()}>Custom</button>}
    </div>
    </>
  );
};

export default App;
