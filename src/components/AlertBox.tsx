import React from "react";

interface IAlertBoxProps {
  content: string;
}

export const AlertBox: React.FC<IAlertBoxProps> = ({ content }) => {
  return (
    <div className="alert-box">
      <span className="alert-icon">⚠️</span>
      <div className="alert-content">
        <h2 className="h4 alert-title">Work in progress</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
