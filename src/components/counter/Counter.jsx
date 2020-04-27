import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'


export class Counter extends Component{
    constructor()
    {
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset=this.reset.bind(this)
    }
    render()
    {
      return(
        <div className="counter">
         <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
         <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
         <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
         <span className="count" /*style={{fontSize:"50px", padding: "15px 30px"}}*/>{this.state.counter}</span>
         <div><button className="reset" onClick={this.reset}>Reset</button></div>
        </div>
      );
    }
    reset(){
        this.setState(
            (prevState) =>{
                return{counter:0}
            }
        )
    }
    increment(by){
        //console.log(`increment from parent - ${by}`);
        this.setState(
           (prevState) =>{
                return {counter:prevState.counter +by}
            }
        );
     }
     decrement(by){
        //console.log(`increment from parent - ${by}`);
        this.setState(
           (prevState) =>{
                return {counter:prevState.counter -by}
            }
        );
     }
}



class CounterButton extends Component
{
    constructor()
    {
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
    }


    render()
    {
      /*  const style = {
            fontSize :"16px",
            backgroundColor: "green",
            padding: "15px 30px",
            color: "white",
            width: "100px"
        }*/
        return(
            <div className="counter"> 
             <button /*style={style}*/ onClick={this.increment}>+{this.props.by}</button>
             <button /*style={style}*/ onClick={this.decrement}>-{this.props.by}</button>
             {/*<span className="count" style={{fontSize:"50px", padding: "15px 30px"}}>{this.state.counter}</span>*/}
            </div>
            );
    }


    increment(){
       this.setState(
           (prevState)=>{
               return{counter:prevState.counter+this.props.by}
           }
       );
       this.props.incrementMethod(this.props.by);
    }
    decrement(){
        this.setState(
            (prevState)=>{
                return{counter:prevState.counter-this.props.by}
            }
        );
        this.props.decrementMethod(this.props.by);
     }

}

CounterButton.defaultProps = {
   by:1
}

CounterButton.propTypes= {
by:PropTypes.number
}

export default Counter;

