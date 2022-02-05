import React, { useState } from 'react';
export {}
interface IState {
    counter : number
}

class Counter extends React.Component<IState>{



    render(){return(
        <div>
            <h2>Counter : {this.props.counter}</h2>
            
        </div>
        
    
        )}}


export default Counter;