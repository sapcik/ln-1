import React from "react";
import {Col, Row} from "react-bootstrap";

const Todo = ({todo, index, completeTodo}) => (
    <Row>
        <Col xs={1}>
            <span onClick={() => completeTodo(index)} style={{cursor: 'pointer'}}>
                {todo.completed ? '✅' : '❌'}
            </span>
        </Col>
        <Col>{todo.title}</Col>
    </Row>
);

export default Todo;