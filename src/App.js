import React from 'react';
import './App.css';
//import SimpleSimplex from 'simple-simplex'
import { connect } from 'react-redux';
import { setVar, setRestrictions} from './store/actions';
import VarAndObjFunction from './components/VarAndObjFunction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ObjectFunction from './components/ObjectFunction';


class App extends React.Component{
  render () {
    console.log(this.props)
    return (
      <div>
        <h1 className="center"> HOLIS, SOY APP</h1>
        <Row>
          <Col md={12} lg={4}>
          <VarAndObjFunction/>
          </Col>
        </Row>
          {/* <ObjectFunction/> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return {
  var: state.var,
  restrictions: state.restrictions
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

