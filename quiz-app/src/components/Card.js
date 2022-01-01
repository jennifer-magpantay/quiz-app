import React from "react";
import { Button } from "./Button";

export const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card__header">
          <p>Category:</p>
          <p>Difficulty:</p>
        </div>
        <div className="card__body">
          <p>Counter:</p>
          <p className="card__body--title">Lorem Ipsum</p>
          <ul className="card__body--list">
            {/* map list */}
            <li className="card__body--list-items">Question List</li>
          </ul>
        </div>
      </div>
      <Button type="button">NEXT</Button>
    </>
  );
};
