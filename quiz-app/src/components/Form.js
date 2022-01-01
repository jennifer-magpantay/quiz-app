import React from "react";

export const Form = ({ children, formSubmit }) => {
  function handleSubmit(event) {
    event.preventDefault();
    if (formSubmit) {
      formSubmit();
    }
  }
  return <form onSubmit={handleSubmit}>{children}</form>;
};
