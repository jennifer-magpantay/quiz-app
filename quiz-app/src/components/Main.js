import React from "react";

export const Main = ({ children }) => {
  return (
    <main>
      <div className="main__container">{children}</div>
    </main>
  );
};
