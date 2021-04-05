import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
//front stack image
import HTML from "../static/image/html.png";
import CSS from "../static/image/css.png";
import JS from "../static/image/javascript.png";
import JQ from "../static/image/jquery.png";
import RE from "../static/image/react.png";
//back stack image
import PY from "../static/image/python.png";
import NO from "../static/image/node.png";
import DJ from "../static/image/django.png";
import FL from "../static/image/flask.png";
import EX from "../static/image/express.png";
import MO from "../static/image/mongodb.png";
import MY from "../static/image/mysql.png";
//devops stack image
import GIT from "../static/image/git.png";
import UB from "../static/image/ubuntu.png";
import AWS from "../static/image/aws.png";
import GCL from "../static/image/gcl.png";

export default class Content extends Component{
    render() {
        return (
            <div className="content">
                <Container>
                    <Row>
                        <Col className="content-header">
                            <h6>소개 / About me</h6>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <p>
                                안녕하세요. 나는 랜덤 자기소개가 들어가는 말풍선 입니다. 제가 해드릴 말은 어서 빨리 좋은 회사에 취업하시길 바랍니다.<br/>
                                <br/>
                                되려니와, 싹이 꽃이 황금시대를 것이다. 되려니와, 우리 때에, 우리 보라. 안고, 오직 주는 두기 가지에 것이다.<br/>
                                같은 오직 이상의 능히 곳으로 오아이스도 힘있다.<br/>
                                피고, 관현악이며, 청춘 없으면, 가는 유소년에게서 그리하였는가? 불어 그것은 미인을 바로 일월과 거친 있는가? 예가 보이는 오직 것이다.<br/>
                                피어나기 얼마나 살 노래하며 못하다 바이며, 쓸쓸하랴? 피가 얼마나 때까지 청춘 그들을 귀는 넣는 듣는다. 인생에 심장의 할지니, 날카로우나 것이 인류의 가치를 끓는다. 인간의 그들은 산야에 무엇이 기쁘며, 우리의 청춘의 가지에 있는가?<br/>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="content-header">
                            <h6>경력사항 / Career</h6>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={4}>
                            2014.07.28 - 2019.05.12
                        </Col>
                        <Col>
                            <p><strong>(주)모니터랩</strong></p>
                            <p>전임연구원 · 정규직</p>
                            <p>
                                파일 분석 시스템 개발<br/>
                                데이터 가공 · 수집<br/>
                                REST-API 개발
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            2020.08.05 - 재직중
                        </Col>
                        <Col>
                            <p><strong>(주)집쇼코리아</strong></p>
                            <p>대리 · 정규직</p>
                            <p>
                                웹서비스 개발<br/>
                                (BackEnd)
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="content-header">
                            <h6>학력 사항 / Education</h6>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>Frontend</Col>
                    </Row>
                    <Row>
                        <Col className="img-box">
                            <img className="stack-img" src={HTML}/>
                            <img className="stack-img" src={CSS}/>
                            <img className="stack-img" src={JS}/>
                            <img className="stack-img" src={JQ}/>
                            <img className="stack-img" src={RE}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="img-box">Backend</Col>
                    </Row>
                    <Row>
                        <Col className="img-box">
                            <img className="stack-img" src={PY}/>
                            <img className="stack-img" src={NO}/>
                            <img className="stack-img" src={DJ}/>
                            <img className="stack-img" src={FL}/>
                            <img className="stack-img" src={EX}/>
                            <img className="stack-img" src={MO}/>
                            <img className="stack-img" src={MY}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="img-box">Devops</Col>
                    </Row>
                    <Row>
                        <Col className="img-box">
                            <img className="stack-img" src={GIT}/>
                            <img className="stack-img" src={UB}/>
                            <img className="stack-img" src={AWS}/>
                            <img className="stack-img" src={GCL}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="content-header">
                            <h6>프로젝트 / Project</h6>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={1}>
                            <h1>8</h1>
                        </Col>
                        <Col xs={11}>
                            <h3>360간 웹사이트</h3>
                            <Row>
                                <Col xs={2} className="project-title">소속</Col>
                                <Col xs={10} className="project-desc">(주)집쇼코리아</Col>
                                <Col xs={2} className="project-title">기간</Col>
                                <Col xs={10} className="project-desc">2020.11.02 ~ 2020.11.30</Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}