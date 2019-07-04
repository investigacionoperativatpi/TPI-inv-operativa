import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setObjFunction, showOrNotRestrictions } from '../store/actions'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { async } from 'q';

class ObjectFunction extends Component{
  constructor() {
    super()
    this.state = {
      arr: [],
      selectMax: true,
      selectMin: false
    }
  }

  componentWillMount() {
    let arrO = []
    for (let index = 0; index < this.props.var; index++) {
      arrO.push(
        <Col key={`coeficiente-${index}`} md={4} xs={6} className="holis">
          <InputGroup>
            <FormControl
              placeholder="0"
              id={`input-${index}`}
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
  
  click= () => {
    let obj = "{"
    for (let index = 0; index < this.props.var; index++) {
      let value = '0'
      if (document.getElementById(`input-${index}`).value !== '') {
        value = document.getElementById(`input-${index}`).value
      } 

      if (index === this.props.var-1) {
        obj = obj.concat(` "${index}":${value}`)
        obj = obj.concat(" }")
      } else {
        obj = obj.concat(` "${index}":${value} ,`)
      }
    } 
    const body = {
      objective: JSON.parse(obj),
      optimizationType: this.state.selectMax ? 'max' : 'min'
    }
    this.props.setObjFunction(body)
    this.props.showOrNotRestrictions()
  }

  render(){
    return (
        <Row>
          <Col xs={12} md={12}>
            <Card className="text-center var">
              <Card.Header>FUNCION OBJETIVO</Card.Header>
              <Card.Body>
              <Row>
                {this.state.arr}
              </Row>
              <Row>
                <Button 
                  variant="outline-info" 
                  className={`col-6 ${this.state.selectMax ? 'selected' : ''}`} 
                  onClick={() => {this.setState({ selectMax: true, selectMin: false})}}
                >
                  MAX
                </Button>
                <Button 
                  variant="outline-info" 
                  className={`col-6 ${this.state.selectMin ? 'selected' : ''}`} 
                  onClick={() => {this.setState({ selectMax: false, selectMin: true})}}
                >
                  MIN
                </Button>
              </Row>
              <Row>
                <Button 
                  variant="outline-info" 
                  className="col-12" 
                  onClick={this.click}
                >
                  Continuar
                </Button>
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
  restrictions: PropTypes.number.isRequired,
  objective: PropTypes.array.isRequired,
  setObjFunction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    var: state.var,
    restrictions: state.restrictions,
    objective: state.ObjFunction.objective
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setObjFunction,
  showOrNotRestrictions
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ObjectFunction)