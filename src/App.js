import React from 'react';
import './App.css';
//import SimpleSimplex from 'simple-simplex'
import { connect } from 'react-redux';
import { setVar, setRestrictions} from './store/actions';
import VarAndObjFunction from './components/VarAndObjFunction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ObjectFunction from './components/ObjectFunction';


class App extends React.Component{
  render () {
    const { show } = this.props
    console.log(this.props)
    return (
      <div>
        <h1 className="center"> HOLIS, SOY APP</h1>
        <Row>
          <Col md={12} lg={4}>
            <VarAndObjFunction/>
          </Col>
          {show &&
            <Col md={12} lg={8}>
              <ObjectFunction/>
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
  show: state.ObjFunction.show
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

