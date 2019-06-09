import React from 'react';
import './App.css';
//import SimpleSimplex from 'simple-simplex'
import { connect } from 'react-redux';
import { setVar, setRestrictions} from './store/actions';
import VarAndObjFunction from './components/VarAndObjFunction';
// import ObjectFunction from './components/ObjectFunction';


class App extends React.Component{
  render () {
    console.log(this.props)
    return (
      <div className="App col-12">
       <div> HOLIS, SOY APP</div>
        <VarAndObjFunction/>
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

