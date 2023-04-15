import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./AddTodo.styles";
const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      ></S.Input>
      <S.Button>Add</S.Button>
    </S.Form>
  );
};

export default AddTodo;
