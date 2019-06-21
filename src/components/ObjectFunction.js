import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class ObjectFunction extends Component{
  constructor() {
    super()

    this.state = {
      arr: [] 
    }
  }
  componentWillMount() {
    let arrO = []
    for (let index = 0; index < this.props.var; index++) {
      arrO.push(
        <Col xs={3} className="holis">
          <InputGroup>
            <FormControl
              placeholder="0"
            />
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">{`X${index}`}</InputGroup.Text>
            </InputGroup.Prepend>
            {index !== this.props.var-1 ? <p className="plus">+</p> : <p className="plus">=</p>}
          </InputGroup>
        </Col>
      ) 
    }
    this.setState({ arr: arrO})
  }
  render(){
    console.log('estas son las props de obj...', this.props)
    return (
      <Row>
        <Col xs={12} md={12}>
          <Card className="text-center var">
            <Card.Header>FUNCION OBJETIVO</Card.Header>
            <Card.Body>
            <Row>
              {this.state.arr}
            </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

ObjectFunction.propTypes = {
  var: PropTypes.number.isRequired,
  restrictions: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    var: state.var,
    restrictions: state.restrictions
  }
}
export default connect(
  mapStateToProps
)(ObjectFunction)