import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export const Template = () => {
  return (
    <>
      <Header />
      <h1>Trivia Quiz</h1>
      <Main>
        <h3>LOADING</h3>
      </Main>
      <Footer />
    </>
  );
};
