import React, {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";

const FormTodo = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!value) return;

        addTodo(value);

        setValue("");
    };

    return (<Row>
        <Col>
            <Form onSubmit={handleSubmit} style={{marginTop: '15px'}}>
                <Form.Control
                    type="text"
                    placeholder="New todo?"
                    value={value}
                    onChange={e => setValue(e.target.value)}/>
            </Form>
        </Col>
    </Row>)
};

export default FormTodo;