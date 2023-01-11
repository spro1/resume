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
//aws stack image
import AWS_BADGE from "../static/image/aws-badge.png";

const projects = [
    {
        id:1,
        company:'(주)모니터랩',
        title:'악성 도메인 검사 시스템',
        date:'2015.03.01 ~ 2015.09.01',
        skill:'Python, MongoDB, VMware',
        contents:<p>- 도메인 분석 결과 마이닝<br/>- VMware 내/외부 통신 모듈 개발<br/>- 도메인 리스트 관리 프로세스 개발</p>
    },{
        id:2,
        company:'(주)모니터랩',
        title:'Threat Intelligence 데이터 크롤링',
        date:'2015.12.10 ~ 2015.12.20',
        skill:'Python',
        contents:<p>- 해외 Threat Intelligence 데이터 수집 크롤러 개발</p>
    },{
        id:3,
        company:'(주)모니터랩',
        title:'악성코드 프로파일링 시스템',
        date:'2016.01.01 ~ 2016.11.10',
        skill:'Python, MongoDB, PostgreSQL',
        contents:<p>- N-gram 파일 유사도 분석 시스템 개발</p>
    },{
        id:4,
        company:'(주)모니터랩',
        title:'실시간 파일 분석 시스템',
        date:'2017.02.01 ~ 2017.07.01',
        skill:'Python, MongoDB, PostgreSQL',
        contents:<p>- 파일 정적분석 모듈 개발<br/>- 동적분석 Cuckoo Sandbox 오픈소스 연동<br/>- 분석 결과 입출력용 REST-API 개발</p>
    },{
        id:5,
        company:'(주)모니터랩',
        title:'APT 시스템 연동',
        date:'2017.10.01 ~ 2018.05.01',
        skill:'Python, MongoDB, PostgreSQL',
        contents:<p>- APT 시스템 연동용 REST-API 개발</p>
    },{
        id:6,
        company:'(주)모니터랩',
        title:'Threat Intelligence 웹 사이트',
        date:'2018.07.01 ~ 2018.12.15',
        skill:'Golang, HTML, CSS, JS, MongoDB',
        contents:<p>- 악성 정보 공유 웹사이트 개발<br/>- 데이터 공유용 REST-API 개발</p>
    },{
        id:7,
        company:'(주)모니터랩',
        title:'도메인 패턴 다중 매칭 라이브러리',
        date:'2019.02.01 ~ 2019.04.15',
        skill:'Golang',
        contents:<p>- 1:N 패턴 매칭 라이브러리 제작</p>
    },{
        id:8,
        company:'(주)집쇼코리아',
        title:'360간 웹사이트',
        date:'2020.11.02 ~ 2020.11.30',
        skill:'Express.js, Reacct.js',
        contents:<p>- Express.js Backend 개발 작업<br/>- React.js Frontend 개발 작업<br/>- AWS 서버 구축 배포</p>,
        site: "https://www.360space.kr"
    },{
        id:9,
        company:'(주)집쇼코리아',
        title:'APCEIU 유네스코 웹사이트',
        date:'2021.05.21 ~ 2021.06.30',
        skill:'Node.js',
        contents:<p>- Node.js 서버 개발<br/>- matterport SDK 커스터마이징<br/>- AWS 서버 구축 배포</p>,
        site: "https://metagcc.org"
    },{
        id:10,
        company:'(주)집쇼코리아',
        title:'사내 홈페이지 리뉴얼 서버 구축',
        date:'2021.10.01 ~ 2021.10.30',
        skill:'Linux',
        contents:<p>- 리눅스 Server 구축</p>,
        site: "https://zipshowkorea.com"
    },{
        id:11,
        company:'(주)집쇼코리아',
        title:'로케이션픽 - 스튜디오 임대 웹서비스',
        date:'2021.03.01 ~ 2021.11.30',
        skill:'Express.js, AWS, MongoDB, HTML, CSS, JS',
        contents:<p>- Express.js 웹 서버 개발<br/>- ejs 템플릿 클라이언트 사이드 작업<br/>- DB 서버 구축<br/>- 그 외 퍼블리싱을 제외한 작업<br/>- AWS 서버 구축 배포</p>,
        site: "https://locationpick.com"
    },{
        id:12,
        company: '개인 사이드 프로젝트',
        title: 'JYM DIARY - 개인 운동 기록 웹 서비스',
        date: '2021.12.21 ~ 2022.01.11',
        skill: 'Express.js, AWS',
        contents:<p>- Express.js 웹 서버 개발<br/>- AWS 서버 구축<br/>- Figma 웹 디자인</p>,
        site: "https://jymdiary.com"
    },{
        id:13,
        company:'(주)집쇼코리아',
        title:'연세대학교-3D 도서관 서비스',
        date:'2022.02.01 ~ 2022.05.31',
        skill:'Express.js, AWS, MongoDB, HTML, CSS, JS, matterport sdk',
        contents:<p>- Express.js CMS 개발<br/>- Matterport sdk 활용 프론트페이지<br/>- AWS 서버 구축 배포</p>,
        site: "https://library.yonsei.ac.kr/local/html/virtualTour"
    },{
        id:14,
        company:'(주)집쇼코리아',
        title:'김해도시가박물관-3D',
        date:'2022.02.01 ~ 2022.05.31',
        skill:'Express.js, AWS, MongoDB, HTML, CSS, JS, matterport sdk',
        contents:<p>- Express.js CMS 개발<br/>- Matterport sdk 활용 프론트페이지<br/>- AWS 서버 구축 배포</p>,
        site: "https://도시가박물관.com"
    },{
        id:15,
        company: '개인 사이드 프로젝트',
        title: 'MOOBIGO - 영화 데이터를 이용한 관객수 예측 웹 서비스',
        date: '2022.06.07 ~ 2022.06.10',
        skill: 'Python, Flask, AWS, Scikit-learn',
        contents:<p>- 사이킷런을 이용한 관객수 예측 모델<br/>- Flask 웹 서비스 구축<br/>- AWS 서버 구축</p>,
        github: "https://github.com/spro1/movie_box_off_predict",
        site: "http://moobigo.xyz"
    },{
        id:16,
        company: '(주)집쇼코리아',
        title: '유네스코 아태교육원 홈페이지 리뉴얼',
        date: '2022.06~2022.08',
        skill: 'Express.js, AWS, MongoDB',
        contents:<p>- 기존 사이트 디자인 변경<br/>- 방문 예약 기능 추가<br/>- CMS 구축</p>,
        site: "http://gcc.unescoapceiu.org/"
    },{
        id:17,
        company: '(주)집쇼코리아',
        title: '연세대학교 도서관 이벤트 페이지 개발',
        date: '2022.09~2022.09',
        skill: 'Express.js, matterport sdk',
        contents:<p>- 연세대학교 VR 도서관 이벤트 페이지 개발</p>,
        site: "https://virtual.yonsei.ac.kr/event"
    },{
        id:18,
        company: '(주)집쇼코리아',
        title: '김해 고고가야 AR 모바일 서비스',
        date: '2022.09~2022.11',
        skill: 'three.js',
        contents:<p>- three.js 웹 모바일 AR 페이지 개발</p>,
        site: "https://smartcity.gimhae.go.kr/mobilear/ar/ar29.html"
    },{
        id:19,
        company: '(주)집쇼코리아',
        title: '3D 충청남도 로케이션 페이지 유지보수',
        date: '2022.11~2022.11',
        skill: 'html',
        contents:<p>- 아임웹 기반 3D 충청남도 로케이션 페이지 추가 및 유지보수</p>,
        site: "https://3dcnfc.kr/"
    }
]

export default class Content extends Component{
    render() {
        return (
            <div className="content">
                <Container>
                    <Row>
                        <Col className="content-header" >
                            <h6 className="content-header-title"><strong>소개 / About me</strong></h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                안녕하세요. 항상 생각하고 고민하는 자칭 타칭 <strong style={{fontSize:'20px'}}>아이디어뱅크 김윤석</strong>입니다.<br/>
                                <br/>
                                <strong style={{fontSize:'20px'}}>개발자</strong> 김윤석은 여러 아이디어를 통해 만든 서비스가 많은 사람들의 삶이 더욱 편하고 이로워지게 하는 것이 목표인 개발자입니다.<br/>
                                새로운 기술을 배우는데 거부감이 없고 아이디어를 생각하고 구현하는 것을 좋아하여 특정 분야가 아닌 여러 분야의 개발에 관심을 가지고 있습니다.<br/>
                                아이디어나 새로운 기술에 관해서 토론하는 것을 좋아합니다.
                                <br/>
                                <br/>
                                <strong style={{fontSize:'20px'}}>사람</strong> 김윤석은 독서를 좋아하고 사진 찍기📸와 그림 그리기🎨를 좋아합니다.<br/>
                                주로 자기계발 서적과 심리학 책을 많이 읽고 사진은 풍경보다는 인물 찍기를 좋아하고 찍히는 것도 좋아합니다. 제 사진은 <a href='https://www.instagram.com/_doltograph/' target="_blank">@_doltograph</a>에서 볼 수 있어요.<br/>
                                그림은 주로 유화를 이용해서 그립니다. 제 그림은 <a href='https://www.instagram.com/lodnuy_/' target="_blank">@lodnuy_</a>에서 볼 수 있어요.<br/>
                                등산도 좋아해서 시간이 생기면 등산을 다녀요. 예전에는 가벼운 운동으로 동네 뒷산을 선호 했지만 요즘에는 풍경이 아름다운 산을 선호해요. 가장 좋아하는 산은 설악산 입니다.<br/>
                                평소에는 약간 낯을 가리지만, 친해지면 말이 많아지고 웃고 떠드는 것을 좋아합니다.<br/>
                                <br/>
                                저에 대해서 더 자세히 알고 싶으면 메일로 연락 주세요. <a href="mailto:yundol@kakao.com">📧</a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="content-header">
                            <h6 className="content-header-title"><strong>경력사항 / Career</strong></h6>
                        </Col>
                    </Row>
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
                                웹서비스 개발(BackEnd)<br/>
                                Node.js Express.js 웹사이트 개발<br/>
                                AWS 서버 구축 배포
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="content-header">
                            <h6 className="content-header-title"><strong>학력 사항 / Education</strong></h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            2012.03 - 2015.02
                        </Col>
                        <Col>
                            <p><strong>인천전자마이스터고등학교</strong></p>
                            <p>전자제어과 · 졸업</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            2019.03 - 졸업예정(2023.02)
                        </Col>
                        <Col>
                            <p><strong>인하대학교(야간대)</strong></p>
                            <p>소프트웨어융합공학과 · 재학</p>
                            <p>4.08/4.5</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="content-header">
                            <h6 className="content-header-title"><strong>기술 스택 / Technology Stack</strong></h6>
                        </Col>
                    </Row>
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
                        <Col className="img-box">자격증</Col>
                    </Row>
                    <Row>
                        <Col className="img-box">
                            <p>- 전자기기기능사, 정보처리기능사</p>
                            <img className="stack-img" src={AWS_BADGE}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="content-header">
                            <h6 className="content-header-title"><strong>프로젝트 / Project</strong></h6>
                        </Col>
                    </Row>
                    {
                        projects.reverse().map(project => {
                            return <Row>
                                <Col xs={1}>
                                    <h2>{project.id}</h2>
                                </Col>
                                <Col xs={11}>
                                    <h3>{project.title}</h3>
                                    <Row>
                                        <Col xs={2} className="project-title">소속</Col>
                                        <Col xs={10} className="project-desc">{project.company}</Col>
                                        <Col xs={2} className="project-title">기간</Col>
                                        <Col xs={10} className="project-desc">{project.date}</Col>
                                        <Col xs={2} className="project-title">사용 기술</Col>
                                        <Col xs={10} className="project-desc">{project.skill}</Col>
                                        {
                                            project.hasOwnProperty("site")
                                                ? (<Col xs={2} className="project-title">사이트</Col>)
                                                : null
                                        }
                                        {
                                            project.hasOwnProperty("site")
                                                ? (<Col xs={10} className="project-desc"><a href={project.site} target="_blank">{project.site}</a></Col>)
                                                : null
                                        }
                                        {
                                            project.hasOwnProperty("github")
                                                ? (<Col xs={2} className="project-title">깃허브 주소</Col>)
                                                : null
                                        }
                                        {
                                            project.hasOwnProperty("github")
                                                ? (<Col xs={10} className="project-desc"><a href={project.github} target="_blank">{project.github}</a></Col>)
                                                : null
                                        }
                                        <Col xs={2} className="project-title">내용</Col>
                                        <Col xs={10} className="project-desc">
                                            <p>
                                                {project.contents}
                                            </p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </Col>
                            </Row>
                        })
                    }
                </Container>
            </div>
        );
    }
}