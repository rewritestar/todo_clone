import React, { useContext, useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import * as S from "./TodoList.styles";

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(() => readTodos());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const handleDelete = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const filteredTodos = getFilteredTodos(todos, filter);
  return (
    <S.Container>
      <S.List>
        {filteredTodos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </S.List>
      <AddTodo onAdd={handleAdd} />
    </S.Container>
  );
};

const getFilteredTodos = (todos, filter) => {
  if (filter === "all") return todos;
  return todos.filter((todo) => todo.status === filter);
};

const readTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
export default TodoList;
