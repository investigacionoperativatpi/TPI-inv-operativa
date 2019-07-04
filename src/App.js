import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setVar, setRestrictions} from './store/actions';
import VarAndObjFunction from './components/VarAndObjFunction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ObjectFunction from './components/ObjectFunction';
import Restrictions from './components/restrictions';
import Coeficientes from './components/coeficientes';


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
        {this.props.showResult ? 
          (
            <div className="resultados">
              {this.props.result.isOptimal ? 
              (
                <div>
                  <h2>Se puedo llegar a un resultado optimo</h2>
                  <p>{`El optimo es: ${this.props.result.solution.optimum}`}</p>
                  {Object.keys(this.props.result.solution.coefficients).length > 0 ?
                    (
                      <div>
                        <p>Los coeficientes son:</p>
                        <Coeficientes coeficientes={this.props.result.solution.coefficients}/>
                      </div>
                    ) 
                    :
                    ''
                  }
                  {
                    
                  }
                </div>
              )
              :
              <p>No se puedo llegar un resultado optimo</p>
            }
            </div>
          ) 
          : 
          ''
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return {
  var: state.var,
  restrictions: state.restrictions,
  showObjFunction: state.ObjFunction.show,
  showRestrictions: state.restrictionsArr.show,
  showResult: state.showResult,
  result: state.result
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

