import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Todo from "./components/Todo"
import FormTodo from "./components/FormTodo"

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");

            setTodos(await response.json())
        };

        fetchTodos();
    }, []);

    const addTodo = title => {
        const newTodos = [...todos, { title, completed: false }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

  return (
    <Container>
      <Row>
        <Col>
            <h1>Todo App</h1>
            <hr/>
        </Col>
      </Row>
        {todos.length ?
            todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                />
            ))
            :
            <Row>
                <Col >
                    <p>Nothing intresting here...</p>
                </Col>
            </Row>
        }
        <FormTodo addTodo={addTodo} />
    </Container>
  );
}

export default App;
