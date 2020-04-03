import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Todo from "./components/Todo";
import FormTodo from "./components/FormTodo";
import Pagination from "./components/Pagination";

function App() {
    const [todos, setTodos] = useState([]);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${perPage}`);

            setTodos(await response.json())
        };

        fetchTodos();
    }, [perPage]);

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
        <Pagination perPage={perPage} setPerPage={setPerPage}/>
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
