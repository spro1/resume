import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import { FaGithubAlt, FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import Profile from "../static/image/profile.jpg"


export default class Header extends Component{
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <div className="header-content">
                            <Row>
                                <Col xs={8}>
                                    <h1>김 윤석</h1>
                                    <br/>
                                    <p><FaUserAlt size="30"/>  남 / 26세</p>
                                    <p><GrMail size="30"/>  yundol@kakao.com</p>
                                    <a href="https://github.com/spro1" target="_blank"><p><FaGithubAlt size="30"/>  https://github.com/spro1</p></a>
                                </Col>
                                <Col>
                                    <div className="header-image" style={{backgroundImage:`url(${Profile})`}}>

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