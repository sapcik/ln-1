import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const Todo = ({todo, index, completeTodo, deleteTodo}) => (
    <Row>
        <Col xs={1}>
            <span onClick={() => completeTodo(index)} style={{cursor: 'pointer'}}>
                {todo.completed ? '✅' : '❌'}
            </span>
        </Col>
        <Col>{todo.title}</Col>
        <Col xs={1}>
            <Button variant="link" onClick={() => deleteTodo(index)}>Remove</Button>
        </Col>
    </Row>
);

export default Todo;