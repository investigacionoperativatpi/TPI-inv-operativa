import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setObjFunction } from '../store/actions'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Restrictions extends Component{
  constructor() {
    super()
    this.state = {
      arr: [],
    }
  }

  componentWillMount() {
      let arr1 = []
      for (let index = 0; index < this.props.restrictions; index++) {
          let arr0 = []
          for (let index = 0; index < this.props.var; index++) {
              arr0.push(
                <Col key={`coeficiente-${index}`} md={4} xs={6} className="holis">
                    <InputGroup>
                        <FormControl
                            placeholder="0"
                            id={`input-${index}`}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">{`X${index}`}</InputGroup.Text>
                        </InputGroup.Prepend>
                        {index !== this.props.var-1 && <p className="plus">+</p>}
                    </InputGroup>
                </Col>
          ) 
        }
        arr0.push(
            <Col key={`coeficiente-${index}`} md={4} xs={6} className="result">
                    <p className="plus">=</p>
                    <InputGroup>
                        <FormControl
                            placeholder="0"
                            id={`result-${index}`}
                            className='col-10'
                        />
                        <InputGroup.Prepend/>
                    </InputGroup>
                </Col>
        )
        arr1.push(
            <div className='col-12 restriccion'>
            <div className='col-1'>{`R${index}: `}</div>
            <Row className='col-11'>{arr0}</Row>
            </div>)
    }
    this.setState({ arr: arr1})
  }
  
//   click= () => {
//     let obj = "{"
//     for (let index = 0; index < this.props.var; index++) {
//       let value = '0'
//       if (document.getElementById(`input-${index}`).value !== '') {
//         value = document.getElementById(`input-${index}`).value
//       } 

//       if (index === this.props.var-1) {
//         obj = obj.concat(` "${index}":${value}`)
//         obj = obj.concat(" }")
//       } else {
//         obj = obj.concat(` "${index}":${value} ,`)
//       }
//     } 
//     const body = {
//       objetive: JSON.parse(obj),
//       optimizationType: this.state.selectMax ? 'max' : 'min'
//     }
//     this.props.setObjFunction(body)
//   }

  render(){
    return (
        <Row>
          <Col xs={12} md={12}>
            <Card className="text-center var">
              <Card.Header>RESTRICCIONES</Card.Header>
              <Card.Body>
              <Row>
                {this.state.arr}
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

Restrictions.propTypes = {
  var: PropTypes.number.isRequired,
  restrictions: PropTypes.number.isRequired,
  objetive: PropTypes.array.isRequired,
  setObjFunction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    var: state.var,
    restrictions: state.restrictions,
    objetive: state.ObjFunction.objetive
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setObjFunction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restrictions)