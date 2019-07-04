import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setVar, setRestrictions} from './store/actions';
import VarAndObjFunction from './components/VarAndObjFunction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ObjectFunction from './components/ObjectFunction';
import Restrictions from './components/restrictions';


class App extends React.Component{
  render () {
    const { showObjFunction, showRestrictions } = this.props
    console.log(this.props)
    return (
      <div className="app">
        <h1 className="center"> HOLIS, SOY APP</h1>
        <Row>
          <Col md={12} lg={4}>
            <VarAndObjFunction/>
          </Col>
          {showObjFunction &&
            <Col md={12} lg={8}>
              <ObjectFunction/>
            </Col>
          }
          {showRestrictions &&
            <Col md={12} lg={12}>
              <Restrictions/>
            </Col>
          }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return {
  var: state.var,
  restrictions: state.restrictions,
  showObjFunction: state.ObjFunction.show,
  showRestrictions: state.restrictionsArr.show
}
}

const mapDispatchToProps = () => {
  return {
    setVar,
    setRestrictions
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

