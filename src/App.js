import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

// CONTEXT
import TodosContextProvider from "./context/TodosContextProvider";

function App() {
  return (
    <>
        <TodosContextProvider>
          <Header/>
          <AddTodo/>
          <TodoList/>  
        </TodosContextProvider>
    </>
  );
}

export default App;
