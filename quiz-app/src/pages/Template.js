import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Spinning } from "../components/Spinning";

export const Template = () => {
  
  return (
    <>
      <Header />
      <h1>Trivia Quiz</h1>
      <Main>
        <Spinning />
      </Main>
      <Footer />
    </>
  );
};
