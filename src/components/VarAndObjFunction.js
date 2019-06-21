import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setVar, setRestrictions, showOrNotObjFunction } from '../store/actions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './varAndObjFunction.css'

class VarAndObjFunction extends Component {
    constructor(props) {
        super(props);
        this.varInput = React.createRef();
        this.restrictionInput = React.createRef();
      }

      setVarAndRestrictions =  () => {
          this.props.setRestrictions(parseInt(this.restrictionInput.current.value))
          this.props.setVar(parseInt(this.varInput.current.value))
          this.props.showOrNotObjFunction()
      }
      
      render() { 
        console.log('esto es el show',this.props.show )
        const { show } = this.props 
        return ( 
            <Row>
                <Col xs={12} md={12}>
                    <Card className="text-center var">
                    <Card.Header>SIMPLEX</Card.Header>
                    <Card.Body>
                        <Card.Title>Variables y Resrticciones</Card.Title>
                        <div className="col-12">
                            <label className="col-6">Variables:</label>
                            <input type="number" className="col-6" ref={this.varInput}/>
                        </div>
                        <div className="col-12">
                            <label className="col-6">Restricciones:</label>
                            <input type="number" className="col-6" ref={this.restrictionInput}/>
                        </div>
                        <Button 
                            variant="outline-info" 
                            className="col-12" 
                            onClick={this.setVarAndRestrictions}
                            disabled={show ? true : false}
                        >
                            Continuar
                        </Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
         );
    }
}

VarAndObjFunction.propTypes = {
    setVar: PropTypes.func.isRequired,
    setRestrictions: PropTypes.func.isRequired,
    showOrNotObjFunction: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
      show: state.ObjFunction.show
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setVar,
    setRestrictions,
    showOrNotObjFunction
}, dispatch)
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VarAndObjFunction)