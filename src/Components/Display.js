import React from 'react'

class Display extends React.Component{
    render(){
        return(
            <div style={displayContainer}>
            <h1>{this.props.display}</h1>
            </div>
        )
    }
}
const displayContainer={
    position:"relative",
    height:"15vh",
    width:"100%",
    color:"hsla(269, 85%, 50%, 1)",
    fontSize:"40px",
    margin:"0"
}
export default Display