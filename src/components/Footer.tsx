import React from "react";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <h6 style={{ textAlign: "center" }}>©{currYear} Created By Mesut Çağa</h6>
    </footer>
  );
};
