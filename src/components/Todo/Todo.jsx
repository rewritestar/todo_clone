import React, { useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import * as S from "./Todo.styles";
const Todo = ({ todo, onUpdate, onDelete }) => {
  const handleChange = (e) => {
    const status = todo.status === "active" ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <S.Container key={todo.id}>
      <S.Checkbox
        type="checkbox"
        id={"checkbox" + todo.id}
        checked={todo.status === "completed"}
        onChange={handleChange}
      ></S.Checkbox>
      <S.Text htmlFor={"checkbox" + todo.id}>{todo.text}</S.Text>
      <S.ButtonContainer>
        <S.Button onClick={handleDelete}>
          <BsTrashFill />
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Todo;
