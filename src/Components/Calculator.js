import React from 'react'
import Buttons from './Buttons'

class Calculator extends React.Component{
    
    render(){
        return (
            <div style={container}>
            <Buttons />
            </div>
        )
    }
}

const container={
    height: "95vh",
    width:"50%",
    background:"hsla(269, 90%, 35%, 1)",
    borderRadius:"20px",
    marginRight:"2%",
    display:"flex",
    justifyContent:"center",
    position:"absolute",
    left:"23%"
}
export default Calculator;