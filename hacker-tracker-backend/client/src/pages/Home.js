import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbo";

class Home extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Hacker Tracker!</h1>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;