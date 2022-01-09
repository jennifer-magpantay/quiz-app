import React from "react";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Select } from "../components/Select";

export const Preferences = () => {

  function handleInputChange(){

  }

  function handleOptionChage(){

  }
  return (
    <>
      <Form>
        <Input 
        type="number" 
        id="number" 
        name="number" 
        value={0} 
        labelText="Number of questions:"
        inputChange={handleInputChange}
        caption="A maximum of 50 questions can be displayed per turn"/>

        <Select 
        id="category"
        name="category"
        labelText="Select category"
        optionsRender={[1,2,3,4]}
        optionChange={handleOptionChage}
        caption="Only 1 category can be requested per turn. To get questions from any category, don't specify a category"
        />

         <Select 
        id="difficulty"
        name="difficulty"
        labelText="Select difficulty"
        optionsRender={[1,2,3,4]}
        optionChange={handleOptionChage}
        caption=""
        />

         <Select 
        id="level"
        name="level"
        labelText="Select level"
        optionsRender={[1,2,3,4]}
        optionChange={handleOptionChage}
        caption=""
        />

      </Form>
    </>
  );
};
