import React from "react";
import {Col, Form, Row} from "react-bootstrap";

const Pagination = ({perPage, setPerPage}) => (
    <Row>
        <Col xs={1} style={{paddingBottom: '15px'}}>
                <Form.Control
                    type="text"
                    placeholder="Per page"
                    value={perPage}
                    onChange={e => setPerPage(e.target.value)}/>
        </Col>
    </Row>
);

export default Pagination;