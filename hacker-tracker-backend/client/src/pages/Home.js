import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbo";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Hacker Tracker!</h1>
                </Jumbotron>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Track your coding time with our Hacker Time Tracker!</h1>
                        </Jumbotron>
                    </Col>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Build a personal resource of saved articles and videos!</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Keep track of all your Goals and Todo's</h1>
                        </Jumbotron>
                    </Col>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Keep personal notes using our Notepad</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;