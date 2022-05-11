import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

// CONTEXT
import TodosContextProvider from "./context/TodosContextProvider";

function App() {
  return (
    <>
        <TodosContextProvider>
          <Header/>
          <AddTodo/>  
        </TodosContextProvider>
    </>
  );
}

export default App;
