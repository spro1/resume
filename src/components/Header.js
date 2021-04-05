import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

export default class Header extends Component{
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <div className="header-content">
                            <Row>
                                <Col xs={8}>
                                    <h1>이름</h1>
                                    <h5>남 / 26세</h5>
                                    <h5>naver@naver.com</h5>
                                    <h5>http://www.naver.com</h5>
                                </Col>
                                <Col>
                                    <div className="header-image">

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}