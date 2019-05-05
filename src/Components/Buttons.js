import React from 'react'
import Display from './Display'

class Buttons extends React.Component{
    state={
        string:"",
        clickOperator:"",
        display:""
    }
      handleClickAC=()=>{
          this.setState(prevState=>({
          string:"",
          clickOperator:"",
          display:""
          
      }))
      }
       operator=()=>{
          if(this.state.string.includes(" "))
              {
                  let splitArray=this.state.string.split(" ")
                   if(this.state.clickOperator[0]==1)
                       {
                        this.setState(()=>({
                            clickOperator:"",
                            string:String(parseFloat(splitArray[0])%parseFloat(splitArray[1]))
                        }))
                          
                       }
                   if(this.state.clickOperator[0]==2)
                     {
                        this.setState(()=>({
                            clickOperator:"",
                            string:String(parseFloat(splitArray[0])-parseFloat(splitArray[1]))
                        }))
                          
                       }
                   if(this.state.clickOperator[0]==3)
                    {
                        this.setState(()=>({
                            clickOperator:"",
                            string:String(parseFloat(splitArray[0])+parseFloat(splitArray[1]))
                        }))
                          
                       }
                   if(this.state.clickOperator[0]==4)
                     {
                        this.setState(()=>({
                            clickOperator:"",
                            string:String(parseFloat(splitArray[0])*parseFloat(splitArray[1]))
                        }))
                          
                       }
                   if(this.state.clickOperator[0]==5)
                      {
                        this.setState(()=>({
                            clickOperator:"",
                            string:String(parseFloat(splitArray[0])/parseFloat(splitArray[1]))
                        }))
                          
                       }
                    setTimeout(() => {
                        this.setState({
                        display:this.state.string
                        })
                    }, 1)
                   console.log("array "+splitArray)
                  return true;
              }
       
             
      }
      handleClickOperation=(event)=>{
          const operation=event.target.name
          const operator=event.target.value
          this.setState(prevState=>({
          string:prevState.string+" ",
           clickOperator:prevState.clickOperator+operation,
              display:prevState.display+operator
          }))
          this.operator()
        
      }
      
      handleClickNum=(event)=>{
          const num=event.target.value
          this.setState(prevState=>({
              string:prevState.string+num,
              display:prevState.display+num
          }))
      }
    render(){

        return (
            <div style={container}>
            <Display 
            clickOperator={this.state.clickOperator}
            display={this.state.display}
            />
            <div style={border}>
            fdsf
            </div>
            <div style={buttonContainer}>
                 <input type="button" style={input}value="AC" onClick={this.handleClickAC}/>
                 <input type="button" style={input} value="%" name="1" onClick={this.handleClickOperation}/>
                 <input type="button" style={input}value="-" name="2" onClick={this.handleClickOperation}/>
                 <input type="button" style={input}value="+" name="3" onClick={this.handleClickOperation}/>
                 <input type="button" style={input}value="7" onClick= {this.handleClickNum}/>
                 <input type="button" style={input} value="8" onClick= {this.handleClickNum}/>
                 <input type="button" style={input}value="9" onClick= {this.handleClickNum}/>
                 <input type="button" style={input}value="*" name="4" onClick={this.handleClickOperation}/>
                 <input type="button" style={input}value="4" onClick= {this.handleClickNum}/>
                 <input type="button" style={input}value="5" onClick= {this.handleClickNum}/>
                 <input type="button" style={input} value="6" onClick= {this.handleClickNum}/>
                 <input type="button" style={input}value="/" name="5" onClick={this.handleClickOperation}/>
                 <input type="button" style={input}value="1" onClick= {this.handleClickNum}/>
                 <input type="button" style={input}value="2" onClick= {this.handleClickNum}/>
                 <input type="button" style={input}value="3" onClick= {this.handleClickNum}/>
                 <input type="button" style={input}value="." onClick= {this.handleClickNum}/>
                 <input style= {zeroButton} type="button" value="0" onClick= {this.handleClickNum}/>
                 <input style={equalButton} type="button" value="="  onClick= {this.operator}/>
            </div>
            </div>
        )
    }
}
const container={
    width:"94%",
    position:"absolute",
    top:"4%",
    borderRadius:"5px",
    height:"87%",
    padding:"0 0 3% 0",
    margin:0,
}
const border={
    background:"hsla(269, 100%, 35%, 1)",
    color:"hsla(269, 100%, 35%, 1)",
    margin:"0"
}
const buttonContainer={
    display:"grid",
    gridTemplateColumns:"repeat(4, 1fr)",
    height:"80%",
    position:"relative",
    margin:"1%"
}
const input={
    margin:"5%",
    color:"#DAFED9",
    fontSize:"40px",
    background:"hsla(269, 100%, 71%, 1)",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer"
}
const equalButton={
    gridRow:"4/6",
    gridColumn:"4/5",
    margin:"5%",
    fontSize:"70px",
    color:"#DAFED9",
     background:"hsla(269, 100%, 71%, 1)",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer"
}
const zeroButton={
    gridRow:"5/6",
    gridColumn:"2/4",
    margin:"3%",
    fontSize:"40px",
    color:"#DAFED9",
     background:"hsla(269, 100%, 71%, 1)",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer"
}
export default Buttons