import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
    <footer className="footer">
        <Container fluid>
            <Row className="text-muted">
                <Col xs="6" className="text-left">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <p className="text-muted">
                                Đồ Án Tốt Nghiệp - BQH
                            </p>
                        </li>
                        {/*  */}
                    </ul>
                </Col>
                <Col xs="6" className="text-right">
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} -{" "}
                        <span href="/" className="text-muted">
            HUST
            </span>
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
