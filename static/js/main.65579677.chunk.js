(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(7),l=n.n(r),o=n(1),c=n(2),s=n(4),u=n(3),p=n(5),d=(n(14),function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:h},i.a.createElement("h1",null,this.props.display))}}]),e}(i.a.Component)),h={position:"relative",height:"15vh",width:"100%",color:"hsla(269, 85%, 50%, 1)",fontSize:"40px",margin:"0"},m=d,k=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={string:"",clickOperator:"",display:""},n.handleClickAC=function(){n.setState(function(t){return{string:"",clickOperator:"",display:""}})},n.operator=function(){if(n.state.string.includes(" ")){var t=n.state.string.split(" ");return 1==n.state.clickOperator[0]&&n.setState(function(){return{clickOperator:"",string:String(parseFloat(t[0])%parseFloat(t[1]))}}),2==n.state.clickOperator[0]&&n.setState(function(){return{clickOperator:"",string:String(parseFloat(t[0])-parseFloat(t[1]))}}),3==n.state.clickOperator[0]&&n.setState(function(){return{clickOperator:"",string:String(parseFloat(t[0])+parseFloat(t[1]))}}),4==n.state.clickOperator[0]&&n.setState(function(){return{clickOperator:"",string:String(parseFloat(t[0])*parseFloat(t[1]))}}),5==n.state.clickOperator[0]&&n.setState(function(){return{clickOperator:"",string:String(parseFloat(t[0])/parseFloat(t[1]))}}),setTimeout(function(){n.setState({display:n.state.string})},1),console.log("array "+t),!0}},n.handleClickOperation=function(t){var e=t.target.name,a=t.target.value;n.setState(function(t){return{string:t.string+" ",clickOperator:t.clickOperator+e,display:t.display+a}}),n.operator()},n.handleClickNum=function(t){var e=t.target.value;n.setState(function(t){return{string:t.string+e,display:t.display+e}})},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:y},i.a.createElement(m,{clickOperator:this.state.clickOperator,display:this.state.display}),i.a.createElement("div",{style:b},"fdsf"),i.a.createElement("div",{style:g},i.a.createElement("input",{type:"button",style:C,value:"AC",onClick:this.handleClickAC}),i.a.createElement("input",{type:"button",style:C,value:"%",name:"1",onClick:this.handleClickOperation}),i.a.createElement("input",{type:"button",style:C,value:"-",name:"2",onClick:this.handleClickOperation}),i.a.createElement("input",{type:"button",style:C,value:"+",name:"3",onClick:this.handleClickOperation}),i.a.createElement("input",{type:"button",style:C,value:"7",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:"8",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:"9",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:"*",name:"4",onClick:this.handleClickOperation}),i.a.createElement("input",{type:"button",style:C,value:"4",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:"5",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:"6",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:"/",name:"5",onClick:this.handleClickOperation}),i.a.createElement("input",{type:"button",style:C,value:"1",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:"2",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:"3",onClick:this.handleClickNum}),i.a.createElement("input",{type:"button",style:C,value:".",onClick:this.handleClickNum}),i.a.createElement("input",{style:f,type:"button",value:"0",onClick:this.handleClickNum}),i.a.createElement("input",{style:O,type:"button",value:"=",onClick:this.operator})))}}]),e}(i.a.Component),y={width:"94%",position:"absolute",top:"4%",borderRadius:"5px",height:"87%",padding:"0 0 3% 0",margin:0},b={background:"hsla(269, 100%, 35%, 1)",color:"hsla(269, 100%, 35%, 1)",margin:"0"},g={display:"grid",gridTemplateColumns:"repeat(4, 1fr)",height:"80%",position:"relative",margin:"1%"},C={margin:"5%",color:"#DAFED9",fontSize:"40px",background:"hsla(269, 100%, 71%, 1)",border:"none",borderRadius:"5px",cursor:"pointer"},O={gridRow:"4/6",gridColumn:"4/5",margin:"5%",fontSize:"70px",color:"#DAFED9",background:"hsla(269, 100%, 71%, 1)",border:"none",borderRadius:"5px",cursor:"pointer"},f={gridRow:"5/6",gridColumn:"2/4",margin:"3%",fontSize:"40px",color:"#DAFED9",background:"hsla(269, 100%, 71%, 1)",border:"none",borderRadius:"5px",cursor:"pointer"},v=k,E=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:j},i.a.createElement(v,null))}}]),e}(i.a.Component),j={height:"95vh",width:"50%",background:"hsla(269, 90%, 35%, 1)",borderRadius:"20px",marginRight:"2%",display:"flex",justifyContent:"center",position:"absolute",left:"23%"},S=E,F=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(S,null))}}]),e}(a.Component);l.a.render(i.a.createElement(F,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.65579677.chunk.js.map