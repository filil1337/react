import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import logo from '../assets/tmdb-logo.png';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title: 'init'};
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.doSearch(event.target.elements[0].value)
  }

   render() {
     return (
       <Row className="show-grid">

          <Col xs={6} md={4}>
              <Form onSubmit={this.handleSubmit.bind(this)} inline className="SearchForm">
               <FormGroup controlId="formInlineEmail">
                <FormControl type="text" placeholder="Search film..." />
               </FormGroup>
              {' '}
               <Button type="submit">
              search
              </Button>
              </Form>
          </Col>
          <Col xsHidden md={4}></Col>
          <Col xs={6} md={4}>
            <img className="center-block, tmdb-logo" src={logo} alt={"logo"}/> 
          </Col>
        </Row>
     )
   }
}
