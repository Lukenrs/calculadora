import React, {Component} from 'react'
import "./App.css"

export default class App extends Component{
  state={
    n1:null,
    n2:null,
    result:null
  }

handleChangeOne = (e) =>{
  this.setState({
    n1: Number(e.target.value)
  })
}
handleChangeTwo = (e) =>{
  this.setState({
    n2: Number(e.target.value)
  })
}

sum = () =>{
  if((this.state.n1 && this.state.n2 !=null) && (this.state.n1  && this.state.n2 !='') ){
    this.setState({
      result: this.state.n1 + this.state.n2
    })
  }
  else{
  
  }
}

sub = () =>{
  if((this.state.n1 && this.state.n2 !=null) && (this.state.n1  && this.state.n2 !='') ){
    this.setState({
      result: this.state.n1 - this.state.n2
    })
  }
  else{
  
  }
}

mult = () =>{
  if((this.state.n1 && this.state.n2 !=null) && (this.state.n1  && this.state.n2 !='') ){
    this.setState({
      result: this.state.n1 * this.state.n2
    })
  }
  else{
  
  }
 
}
div = () =>{
  if((this.state.n1 && this.state.n2 !=null) && (this.state.n1  && this.state.n2 !='') ){
    this.setState({
      result: this.state.n1 / this.state.n2
    })
  }
  else{
  
  }
}
reset = () =>{
  this.setState({
    n1:'',
    n2:'',
    result: ''
  })
}
  
  render(){
   let {handleChangeOne, handleChangeTwo,sum, sub, mult, div, reset} =this
    return(
      <div className='calc'>
        <div className='calc-content'>
          <div className="calc-screen">
            <div className='calc-result'>
            <h1>{this.state.result}</h1>
            </div>
            <div class="inputs">
            <input onChange={handleChangeOne} type="number" name="numero1" value={this.state.n1}></input>
            <input onChange={handleChangeTwo} type="number" name="numero1" value={this.state.n2}></input>
            </div>
           
          </div>
          <div className="calc-buttons">
            <button className="button"onClick={sum}>+</button>
            <button className="button" onClick={sub}>-</button>
            <button className="button" onClick={mult}>*</button>
            <button className="button" onClick={div}>/</button>
            <button className="button ac" onClick={reset}>C</button>
          </div>
        </div>

      </div>
    )
  }
}