import React from "react";
import { Button } from "../components/Button";

export const Score = () => {
  return (
    <>
      <p>You scored xx of xx questions</p>
      <Button type="button">START AGAIN</Button>
    </>
  );
};
