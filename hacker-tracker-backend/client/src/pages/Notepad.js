import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbo";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Notepad extends Component {
    state = {
      notes: [],
      title: "",
      category: "",
      note: ""
    }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.note) {
        API.saveBook({
          title: this.state.title,
          category: this.state.category,
          note: this.state.note
        })
          // .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    };

    render() {
        return (
            <Container>
                  <Jumbotron>
                    <h1>Welcome to the Hacker Tracker Notepad!</h1>
                    <p>Save Notes and view them all or search by title/category</p>
                </Jumbotron>
                <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category(optional)"
              />
              <TextArea
                value={this.state.note}
                onChange={this.handleInputChange}
                name="note"
                placeholder="Note(required)"
              />
              <FormBtn
                disabled={!(this.state.note && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Note
              </FormBtn>
            </form>
            </Container>
        )
    }
}

export default Notepad;