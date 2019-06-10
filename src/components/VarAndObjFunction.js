import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setVar, setRestrictions} from '../store/actions';
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
          this.props.setRestrictions(this.restrictionInput.current.value)
          this.props.setVar(this.varInput.current.value)
      }
      
      render() { 
        // const { branchId, roles, ...props } = this.props ESTO ES UN EJEMPLO PARA TENER EN CUENTA
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
                        <Button variant="outline-info" className="col-12" onClick={this.setVarAndRestrictions}>Continuar</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
         );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setVar,
    setRestrictions
}, dispatch)
    
VarAndObjFunction.propTypes = {
    setVar: PropTypes.func.isRequired,
    setRestrictions: PropTypes.func.isRequired
}

export default connect(
    null,
    mapDispatchToProps
)(VarAndObjFunction)