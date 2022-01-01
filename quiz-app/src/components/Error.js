import React from "react";
import { Button } from "./Button";

export const Error = ({ children }) => {
  return (
    <>
      <p>{children}</p>
      <Button type="button">START AGAIN</Button>
    </>
  );
};
