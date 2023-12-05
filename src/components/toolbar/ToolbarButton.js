import React from "react";
import "./toolbar.css";
export default function ToolbarButton({ label, icon, onPress }) {
  return (
    <div className='toolbarButton' onClick={onPress}>
      <img src={icon} alt='button icon' />
      <p>{label}</p>
    </div>
  );
}
