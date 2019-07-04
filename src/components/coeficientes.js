import  React, { Component } from 'react'
import PropTypes from 'prop-types'

class Coeficientes extends Component{
    render() {
        const coef = Object.keys(this.props.coeficientes)
        const values = Object.values(this.props.coeficientes)
        return (
            <div>
                {
                    coef.map( (coeficiente, index) => (
                        <div>
                            <p>{`${coeficiente}: ${values[index]}`}</p>
                        </div>
                    ))
                }
            </div>
            
        )
    }
}


Coeficientes.propTypes = {
    coeficientes: PropTypes.object.isRequired
}

export default Coeficientes