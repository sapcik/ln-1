import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Todo from "./components/Todo"
import FormTodo from "./components/FormTodo"

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");

            setTodos(await response.json())
        };

        fetchTodos();
    }, []);

    const deleteTodo = index => {
        setTodos(
            todos.filter((value, arrIndex) => index !== arrIndex)
        );
    };

    const addTodo = title => {
        setTodos(
            [...todos, { title, completed: false }]
        );
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
                    deleteTodo={deleteTodo}
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
