import React from "react";
import { Button } from "./Button";

export const Card = ({ category, difficulty, question, options }) => {
  return (
    <>
      <div className="card">
        <div className="card__header">
          <p className="caption">Category:{category}</p>
          <p className="caption">Difficulty: {difficulty}</p>
        </div>
        <div className="card__body">
          <p>Question 01/10</p>
          <p className="card__body--title">{question}</p>
          <ul className="card__body--list">
            {/* map list */}
            <li className="card__body--list-items">
              {/* map question options */}
              {options}
            </li>
          </ul>
        </div>
        <Button type="button">NEXT</Button>
      </div>
    </>
  );
};
